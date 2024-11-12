import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import menu from './menu.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-center">
      <nav className={`fixed top-0 mt-9 z-50 bg-[#1b1b1b] bg-opacity-90 shadow-lg max-w-6xl w-full ${
        isMenuOpen ? 'rounded-[24px]' : 'rounded-[24px]'
      } px-3 sm:px-4 lg:px-14 py-4 flex flex-col md:flex-row md:items-center justify-between border-t border-t-[#615f5f] transition-all duration-300 ease-in-out`}>

        {/* Top Bar with Logo and Menu */}
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Menu Icon (Visible on Small Screens) */}
          <div className="flex md:hidden">
            <img
              src={menu}
              alt="Menu"
              className="h-6 sm:h-8 w-6 sm:w-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Links Section */}
        <div
          className={`
            flex flex-col md:flex-row md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:space-x-2 lg:space-x-3
            items-center space-y-3 md:space-y-0
            transition-all duration-300 ease-in-out
            w-full md:w-auto text-center
            ${isMenuOpen 
              ? 'opacity-100 visible mt-6 mb-4 h-auto' 
              : 'opacity-0 md:opacity-100 invisible md:visible h-0 md:h-auto mt-0 mb-0 md:mt-0'
            }
          `}
        >
          <Link
            to="/"
            className="px-4 sm:px-6 md:px-3 lg:px-4 py-2 text-sm sm:text-base lg:text-lg font-medium text-white border border-purple-400 rounded-full hover:bg-purple-600 hover:text-black hover:border-transparent transition duration-300  sm:w-50% md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 sm:px-6 md:px-3 lg:px-4 py-2 text-sm sm:text-base lg:text-lg font-medium text-white border border-purple-400 rounded-full hover:bg-purple-600 hover:text-black hover:border-transparent transition duration-300  sm:w-50% md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/our-team"
            className="px-4 sm:px-6 md:px-3 lg:px-4 py-2 text-sm sm:text-base lg:text-lg font-medium text-white border border-purple-400 rounded-full hover:bg-purple-600 hover:text-black hover:border-transparent transition duration-300  sm:w-50% md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Our teams
          </Link>
          <Link
            to="/contact"
            className="px-4 sm:px-6 md:px-3 lg:px-4 py-2 text-sm sm:text-base lg:text-lg font-medium text-white border border-purple-400 rounded-full hover:bg-purple-600 hover:text-black hover:border-transparent transition duration-300  sm:w-50% md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <div
          className={`
            flex justify-center sm:relative md:rounded-full md:p-[2px] sm:bg-gradient-to-r md:from-transparent md:via-white to-transparent animate-border
            transition-all duration-300 ease-in-out text-center
            ${isMenuOpen 
              ? 'opacity-100 visible mt-2 mb-4 h-auto' 
              : 'opacity-0 md:opacity-100 invisible md:visible h-0 md:h-auto mt-0 mb-0'
            }
          `}
        >
          <Link 
            to="/register" 
            className="flex items-center justify-center md:justify-start bg-[#252525] text-sm sm:text-base lg:text-lg text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 rounded-full shadow-inner  sm:w-50% md:w-auto whitespace-nowrap" 
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-4 w-3 mr-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 animate-blink"></span>
            </span>
            Recent Event
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;