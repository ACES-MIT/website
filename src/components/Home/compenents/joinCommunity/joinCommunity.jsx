import React from 'react';

const Community = () => {
  return (
    <div className="relative h-[500px] md:h-[550px] bg-[#111111] overflow-hidden">
      {/* Background */}
      <div
        className="flex items-center justify-center h-full w-full rounded-lg overflow-hidden"
        style={{
          backgroundImage: 'url(https://framerusercontent.com/images/ETRqNWWMBEeXF5D05OggGRFDeec.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* Join button */}
          <button className="bg-[#0c0a0ae6] text-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-gray-700 shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 p-5 md:p-8 lg:p-6">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-lg md:text-xl tracking-wider">Join our Community</span>
          </button>
          {/* Email text */}
          <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-bold mb-4 md:mb-8 text-center mt-4 md:mt-8 hover:scale-110 transition-transform duration-200 tracking-wide">
            parliamentofaces2018@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Community;
