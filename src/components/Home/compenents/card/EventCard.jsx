import React from "react";

const EventCard = () => {
  return (
    <div className="flex justify-center items-center w-[90%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[500px] h-[500px] bg-[rgb(35,35,35)] rounded-[11%] mb-4 sm:mb-6 md:mb-0 transition-all duration-500 ease-in-out">
      <div className="flex flex-col justify-center items-center w-[90%] h-[85%] rounded-[5%] bg-[rgb(31,31,31)] border-t-2 border-gray-400">
        <div className="w-[80%] h-[55%] relative mt-6 rounded-3xl bg-[rgb(40,40,40)]"></div>
        <div className="text-gray-200 text-4xl mt-5 font-semibold font-sf-pro text-center">
          EVENT
        </div>
        <div className="text-gray-200 text-2xl mt-3 font-semibold font-sf-pro text-center">
          ABOUT EVENT
        </div>
        <div className="text-gray-200 text-lg mt-2 font-semibold font-sf-pro text-center mb-4">
          DATE
        </div>
      </div>
    </div>
  );
};

export default EventCard;
