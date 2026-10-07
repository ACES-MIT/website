#!/usr/bin/env node
// One-shot migration: upload every image under public/ to Cloudinary.
// public_id mirrors the path relative to public/ (extension stripped), so the
// delivery URL is a pure prefix swap of the existing "/images/..." refs.
// Requires CLOUDINARY_URL in the environment. Never commit that value.

import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const PUBLIC_DIR = fileURLToPath(new URL("../public", import.meta.url));
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);
const CONCURRENCY = 5;

const cloudinaryUrl = process.env.CLOUDINARY_URL;
if (!cloudinaryUrl) {
  console.error("CLOUDINARY_URL is not set");
  process.exit(1);
}
const parsed = cloudinaryUrl.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
if (!parsed) {
  console.error("CLOUDINARY_URL is malformed");
  process.exit(1);
}
const [, apiKey, apiSecret, cloudName] = parsed;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const toPosix = (path) => path.split(sep).join("/");

// Cloudinary rejects public_ids with trailing whitespace or "&".
// The rewrite step applies this same rule to each reference so the two stay in sync.
export const sanitizePublicId = (path) =>
  toPosix(path)
    .split("/")
    .map((segment) => segment.trim().replace(/&/g, "and"))
    .join("/");

async function upload(file) {
  const rel = toPosix(relative(PUBLIC_DIR, file));
  const ext = extname(rel);
  if (!IMAGE_EXT.has(ext.toLowerCase())) return null;

  const publicId = sanitizePublicId(rel.slice(0, -ext.length));
  const timestamp = Math.floor(Date.now() / 1000);
  const params = { overwrite: "true", public_id: publicId, timestamp };
  const toSign = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  const signature = createHash("sha1").update(toSign + apiSecret).digest("hex");

  const form = new FormData();
  form.append("file", new Blob([await readFile(file)]), rel);
  for (const [key, value] of Object.entries(params)) form.append(key, String(value));
  form.append("api_key", apiKey);
  form.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: form,
  });
  const body = await response.json();
  if (!response.ok) throw new Error(`${rel}: ${body?.error?.message ?? response.status}`);

  return { local: `/${rel}`, publicId: body.public_id, bytes: body.bytes ?? 0 };
}

// Optional argv filter: pass substrings to re-upload only matching files.
const filters = process.argv.slice(2);
const files = [];
for await (const file of walk(PUBLIC_DIR)) {
  const rel = toPosix(relative(PUBLIC_DIR, file));
  if (!filters.length || filters.some((f) => rel.includes(f))) files.push(file);
}

const uploaded = [];
const failures = [];
let cursor = 0;

async function worker() {
  while (cursor < files.length) {
    const file = files[cursor++];
    try {
      const result = await upload(file);
      if (result) {
        uploaded.push(result);
        console.log(`ok   ${result.local}`);
      }
    } catch (error) {
      failures.push(error.message);
      console.error(`FAIL ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const totalBytes = uploaded.reduce((sum, item) => sum + item.bytes, 0);
console.log(`\nuploaded ${uploaded.length}/${files.length}  (${(totalBytes / 1048576).toFixed(1)} MB)`);
if (failures.length) {
  console.error(`\n${failures.length} FAILED:`);
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}
