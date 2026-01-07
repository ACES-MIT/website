import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const FloatingNav = ({ navItems, className, logo }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        className="flex fixed top-7 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-[40px] dark:bg-black/80 bg-gray-900/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 md:px-11 py-4 md:py-3.5 items-center w-[95%] md:w-auto md:max-w-fit"
      >
        {/* Mobile - Logo on the left */}
        {logo && (
          <Link to="/" className="flex md:hidden items-center">
            {logo}
          </Link>
        )}
        
        {/* Desktop Logo */}
        {logo && (
          <Link to="/" className="hidden md:flex items-center mr-6">
            {logo}
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          {navItems
            .filter((item) => !item.isButton)
            .map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                to={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400"
                )}
              >
                <span className="hidden sm:block text-base font-medium">
                  {navItem.name}
                </span>
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
        </div>

        {/* Mobile - Hamburger on the right */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center ml-auto dark:text-white text-neutral-600 transition-colors duration-300"
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-0 right-0 mx-auto z-[4999] md:hidden px-4"
          >
            <div className="w-full max-w-md mx-auto bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-10 md:p-6 space-y-5 md:space-y-4">
              {navItems
                .filter((item) => !item.isButton)
                .map((navItem, idx) => (
                  <Link
                    key={`mobile-link=${idx}`}
                    to={navItem.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-white hover:text-purple-400 transition-colors duration-300 py-2"
                  >
                    <span>{navItem.icon}</span>
                    <span className="text-base font-medium">
                      {navItem.name}
                    </span>
                  </Link>
                ))}
              {navItems.find((item) => item.isButton) && (
                <Link
                  to={navItems.find((item) => item.isButton).link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border border-white/20 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-purple-900/30 hover:border-purple-500 transition-all duration-300 mt-4"
                >
                  {navItems.find((item) => item.isButton).name}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
