import React from 'react';
import { motion } from 'framer-motion';
import GradientBox from './gradient';

// Updated configuration for the gradient boxes to be more subtle and ambient
const gradientConfig1 = {
  top: '10%',
  left: '5%',
  width: '40vw',
  height: '40vw',
  colorStops: [['rgba(255, 0, 230, 0.15)', '0%'], ['rgba(250, 47, 230, 0.05)', '40%'], ['rgba(0, 0, 0, 0)', '70%']],
  borderRadius: '50%'
};

const gradientConfig2 = {
  top: '80%',
  left: '90%',
  width: '45vw',
  height: '45vw',
  colorStops: [['rgba(149, 0, 255, 0.15)', '0%'], ['rgba(149, 0, 255, 0.05)', '40%'], ['rgba(0, 0, 0, 0)', '70%']],
  borderRadius: '50%'
};

function AboutAces() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-black text-white flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientBox {...gradientConfig1} />
        <GradientBox {...gradientConfig2} />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Main Title with staggered reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50"
            >
              ABOUT ACES
            </motion.h1>
          </div>

          {/* Subtitle / Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative inline-block"
          >
            <p className="text-xl md:text-3xl font-light text-purple-200/90 italic tracking-wide">
              "For the Students, By the Students"
            </p>
            {/* Subtle underline decoration */}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full opacity-70"></span>
          </motion.div>

          {/* Minimal Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[1px] h-16 bg-gradient-to-b from-gray-800 via-gray-500 to-gray-800"
          />

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 leading-loose font-light"
          >
            <p className="mb-4">
              We are not just a Club, We are an <span className="text-white font-medium">Association</span>.
            </p>
            <p>
              Committed to the principles of <span className="text-purple-300">Unity</span>, <span className="text-pink-300">Support</span>, and <span className="text-purple-300">Dedication</span>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutAces;
