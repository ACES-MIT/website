import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountingNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const endNum = parseInt(end);

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      const progressPercentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressPercentage * endNum);

      setCount(currentCount);

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50 inline-block mb-2">
      {count}{end.toString().endsWith('+') ? '+' : ''}
    </span>
  );
};

const StatItem = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay }}
    className="flex flex-col items-center md:items-start"
  >
    <CountingNumber end={number} />
    <span className="text-sm md:text-base font-medium tracking-widest uppercase text-gray-500">{label}</span>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section className="bg-black text-white w-full py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium tracking-wider text-gray-300 uppercase bg-white/5 backdrop-blur-sm">
              Our Impact
            </span>
          </motion.div>

          {/* Stats Grid */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
            <StatItem number="6" label="Years of Experience" delay={0.2} />
            <StatItem number="99+" label="Aspiring Minds" delay={0.4} />
            <StatItem number="26" label="Events Hosted" delay={0.6} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;