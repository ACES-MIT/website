import React from 'react';
import { motion } from 'framer-motion';

function MoreInfo() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">

          {/* Label / Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/4 flex md:justify-end"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium tracking-wider text-gray-300 uppercase bg-white/5 backdrop-blur-sm">
              Who We Are
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-3/4 flex flex-col space-y-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-gray-200">
              ACES, the oldest and largest club at MIT ADT University's School of Computing, is a vibrant techno-cultural organization. We empower students with opportunities that go beyond academics, nurturing <span className="text-purple-400">leadership</span>, <span className="text-pink-400">technical expertise</span>, and <span className="text-purple-400">cultural interests</span>.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              As an umbrella to other clubs within the School of Computing, ACES plays a pivotal role in bridging technology and culture. With its massive following and respected legacy, it provides a platform where students can thrive <span className="italic text-white">academically, socially, and creatively</span>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
