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
          w-[250px] h-[320px] md:w-[340px] md:h-[430px] xl:w-[420px] xl:h-[530px]
          transition-all duration-500 ease-in-out cursor-pointer shadow-lg overflow-hidden relative"
    >
      {children}
      
      {data?.isRegistrationClosed && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 flex items-center justify-center z-10">
          <div className="relative px-12 py-3 overflow-hidden">
            <span className="relative z-10 text-white font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl tracking-wider uppercase">
            Registration Closed
            </span>
            ...
<div className="absolute inset-0 bg-[rgba(128,0,128,0.4)] border-t border-b border-red-400/60 backdrop-blur-sm"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardContent key="front">
          
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden p-[1px]">
            <img
              src={data?.Image}
              alt={data?.Name}
              className="w-full h-full object-contain"
            />
          </div>
          
        </CardContent>

        <CardContent key="back">
          <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-6 xl:p-8 overflow-y-auto bg-gradient-to-br from-gray-900 to-black">
            <div className="text-white text-sm sm:text-base md:text-lg xl:text-xl font-bold font-sf-pro text-center mb-3 leading-snug">
              {data?.Details}
            </div>
            <div className="text-gray-300 text-xs sm:text-xs md:text-sm xl:text-base font-medium font-sf-pro text-center mb-2 leading-relaxed">
              {data?.MInfo}
            </div>
            <div className="text-gray-400 text-xs sm:text-xs md:text-xs xl:text-sm font-light font-sf-pro text-center mb-4 leading-normal">
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
                className={`font-sf-pro font-semibold text-xs sm:text-sm md:text-base px-6 py-2.5 rounded-full mt-3 transition-all duration-300 ${
                  data?.isRegistrationClosed 
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/50"
                }`}
                disabled={data?.isRegistrationClosed}
              >
                {data?.isRegistrationClosed ? "Registration Closed" : "Register"}
              </button>
            </Link>
          </div>
        </CardContent>
      </ReactCardFlip>
    </div>
  );
};

export default EventCard;
