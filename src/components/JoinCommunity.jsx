import React from 'react';
import  '../index.css';

const Community = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background */}
      <div
        className="flex items-center justify-center min-h-screen bg-black w-full h-full rounded-lg overflow-hidden"
        style={{
          backgroundImage: 'url(https://framerusercontent.com/images/ETRqNWWMBEeXF5D05OggGRFDeec.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          
          {/* Join Button */}
          <div className="flex justify-center sm:relative sm:rounded-full sm:p-[2px] sm:bg-gradient-to-r sm:from-transparent sm:via-white to-transparent animate-border
              transition-all duration-300 ease-in-out text-center
              opacity-100 sm:opacity-100 max-h-full sm:max-h-full mt-0 mb-0">
            <a className="flex items-center justify-center bg-[#252525] text-white text-base sm:text-sm md:text-lg px-6 py-3 sm:py-2 rounded-full shadow-inner w-full sm:w-auto md:w-auto" href="https://chat.whatsapp.com/LSoSVdHx0cz1FfvCh3eDqk">
              <span className="flex items-center justify-center h-4 w-4 mr-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 animate-blink "></span>
              </span>
              Join our Community
            </a>
          </div>

          {/* Email Text */}
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-8 text-center mt-8 hover:scale-110 transition-transform duration-200 tracking-wide">
            parliamentofaces2018@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Community;