# ACES Website

Official website for **ACES** (Association of Computer Engineering Students), MIT ADT University, Pune.

Live at [www.acesmitadt.com](https://www.acesmitadt.com).

## Stack

| | |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Routing | React Router 6 (`BrowserRouter`) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion, GSAP, Lenis |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev      # dev server, http://localhost:5173
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

Vercel builds from `main` and serves `dist/`.

`vercel.json` contains a rewrite that sends unmatched paths to `index.html`. This
is required: every route in this app is client-rendered from a single HTML file,
so without it a refresh on `/about` or any other deep link returns a 404 from the
host before the app can load. Do not remove it.

## Project structure

```
src/
├── components/
│   ├── About/          About page and its sections
│   ├── ContactUs/      Contact page
│   ├── Home/           Landing page
│   ├── Login/          Login placeholder
│   ├── OurTeam/        Team roster
│   ├── PastEvents/     Event galleries
│   ├── TermsAndConditions/
│   └── ui/             Shared UI
├── assets/             Bundled images (hashed at build time)
├── utils/              Helpers
└── main.jsx            Entry point
```

Static files served as-is go in `public/`; anything imported from `src/` is
processed and content-hashed by Vite.

## Conventions

- Components are `PascalCase`; hooks use a `use` prefix.
- Prefer `src/assets` for imported images and `public/` only for files that must
  keep a stable URL.
- Every `<img>` needs an `alt` attribute.

## License

Proprietary — all rights reserved. See the copyright notice in the site footer.
Not licensed for reuse or redistribution.
