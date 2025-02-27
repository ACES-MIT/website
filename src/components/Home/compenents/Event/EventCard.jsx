import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

const EventCard = ({ data }) => {
  const [isFlipped, setisFlipped] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setisFlipped(!isFlipped);
  }

  const CardContent = ({ children }) => (
    <div
      onClick={handleClick}
      className="flex justify-center items-center 
          w-[280px] h-[350px] md:w-[400px] md:h-[500px] xl:w-[520px] xl:h-[650px]
          bg-[rgb(35,35,35)] rounded-[11%] 
          transition-all duration-500 ease-in-out cursor-pointer"
    >
      <div className="flex flex-col justify-center items-center w-[90%] h-[85%] rounded-[5%] bg-[rgb(31,31,31)] border-t-2 border-gray-400 relative">
        {children}
        {data?.isRegistrationClosed && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 backdrop-blur-sm flex items-center justify-center rounded-[5%] z-10">
            <div className="relative px-12 py-3 overflow-hidden">
              <span className="relative z-10 text-white font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl tracking-wider uppercase">
              Registration Closed
              </span>
              <div className="absolute inset-0 bg-red-500/40 border-t border-b border-red-400/60 backdrop-blur-sm"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardContent key="front">
          
          <div className="w-[80%] aspect-square relative overflow-hidden">
            <img
              src={data?.Image}
              alt={data?.Name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-gray-200 text-lg sm:text-xl md:text-3xl xl:text-4xl mt-2 font-semibold font-sf-pro text-center">
            {data?.Name}
          </div>
          <div className="text-gray-200 text-sm sm:text-md md:text-xl xl:text-2xl mt-2 font-semibold font-sf-pro text-center">
            {data?.About}
          </div>
          <div className="text-gray-200 text-xs sm:text-sm md:text-lg xl:text-xl mt-2 font-semibold font-sf-pro text-center mb-4">
            {data?.Date}
          </div>
        </CardContent>

        <CardContent key="back">
          <div className="text-gray-200 text-lg sm:text-xl md:text-3xl xl:text-4xl mt-5 font-semibold font-sf-pro text-center">
            {data?.Details}
          </div>
          <div className="text-gray-200 text-sm sm:text-md md:text-xl xl:text-2xl mt-3 font-semibold font-sf-pro text-center">
            {data?.MInfo}
          </div>
          <div className="text-gray-200 text-xs sm:text-sm md:text-lg xl:text-xl mt-2 font-semibold font-sf-pro text-center mb-4">
            {data?.AInfo}
          </div>
          <Link 
            to={data?.isRegistrationClosed ? "#" : (data?.Link || "")} 
            onClick={(e) => {
              e.stopPropagation();
              if (data?.isRegistrationClosed) e.preventDefault();
            }}
          >
            <button 
              className={`font-sf-pro font-semibold text-lg py-2 px-4 rounded-full mt-4 ${
                data?.isRegistrationClosed 
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
                  : "bg-[#252525] border border-[#252525] text-white hover:bg-gray-700 transition-colors"
              }`}
              disabled={data?.isRegistrationClosed}
            >
              {data?.isRegistrationClosed ? "Registration Closed" : "Register"}
            </button>
          </Link>
        </CardContent>
      </ReactCardFlip>
    </div>
  );
};

export default EventCard;
