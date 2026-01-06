
const Faculty = ({ Name, position, Image }) => {
  return (
    <div className="group w-[320px] h-[400px] md:w-[280px] md:h-[350px] sm:w-[240px] sm:h-[300px] bg-gradient-to-b from-[rgb(35,35,35)] to-[rgb(25,25,25)] 
      border-t-2 border-gray-500 rounded-[8%]  py-4 transition-all duration-300 ease-in-out 
      hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700/30 hover:border-t-blue-400">
      <div className="flex flex-col justify-center items-center">
        <div
          style={{ 
            backgroundImage: `url(${Image})`,
            aspectRatio: '4 / 5' // Setting the aspect ratio to 4:5
          }}
          className="w-[224px] md:w-[200px] sm:w-[180px] mt-[5%] rounded-[8%] bg-cover bg-center 
          transition-transform duration-300 group-hover:shadow-md group-hover:shadow-gray-400/20"
        ></div>
        <div className="w-full px-2 mt-[6%]">
          <div className="text-gray-200 font-sf-pro text-lg md:text-base sm:text-sm 
          text-center font-semibold group-hover:text-blue-300 transition-colors duration-300">
            {Name}
          </div>
          <div className="text-gray-400 font-sf-pro text-md md:text-sm sm:text-xs 
          text-center font-medium mt-1 group-hover:text-gray-300 transition-colors duration-300">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

