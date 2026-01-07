import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const FloatingNav = ({ navItems, className, logo }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-7 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-[40px] dark:bg-black/80 bg-gray-900/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-11 py-3.5 items-center justify-center space-x-7",
          className
        )}
      >
        {logo && (
          <Link to="/" className="flex items-center mr-6">
            {logo}
          </Link>
        )}
        {navItems.filter((item) => !item.isButton).map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-all duration-300 hover:scale-110 hover:dark:text-purple-400 hover:text-purple-600"
            )}
          >
            <span className="block sm:hidden transition-transform duration-300">{navItem.icon}</span>
            <span className="hidden sm:block text-base font-medium">{navItem.name}</span>
          </Link>
        ))}
        {navItems.find((item) => item.isButton) && (
          <Link
            to={navItems.find((item) => item.isButton).link}
            className="border text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-2.5 rounded-[40px] transition-all duration-300 hover:scale-110 hover:bg-purple-900/30 hover:border-purple-500"
          >
            <span>{navItems.find((item) => item.isButton).name}</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
          </Link>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
