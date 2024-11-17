import React from "react";

const Faculty = ({ Name, Position, Image }) => {
  return (
    <div className="w-[320px] h-[400px] md:w-[280px] md:h-[350px] sm:w-[240px] sm:h-[300px] bg-[rgb(30,30,30)] border-t-2 border-gray-400 rounded-[8%]">
      <div className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-900">
        <div
          style={{ 
            backgroundImage: `url(${Image})`,
            aspectRatio: '4 / 5' // Setting the aspect ratio to 4:5
          }}
          className="w-[224px] md:w-[200px] sm:w-[180px] mt-[10%] rounded-[8%] bg-cover bg-center"
        ></div>
        <div className="text-gray-200 font-sf-pro text-2xl md:text-xl sm:text-lg text-center font-semibold mt-[3%]">
          {Name}
        </div>
        <div className="text-gray-200 font-sf-pro text-l md:text-base sm:text-sm text-center font-semibold">
          {Position}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
