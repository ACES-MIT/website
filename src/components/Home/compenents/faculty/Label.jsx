
const Faculty = ({ Name, position, Image }) => {
  return (
    <div className="group w-full max-w-[280px] bg-gradient-to-b from-[rgb(35,35,35)] to-[rgb(25,25,25)] 
      border-t-2 border-gray-500 rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
      hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-700/30 hover:border-t-blue-400">
      <div className="flex flex-col h-full">
        <div
          style={{ 
            backgroundImage: `url(${Image})`,
          }}
          className="w-full aspect-[4/5] bg-cover bg-center bg-no-repeat
          transition-transform duration-300 group-hover:shadow-md group-hover:shadow-gray-400/20"
        ></div>
        <div className="w-full px-4 py-4 flex-shrink-0">
          <div className="text-gray-200 font-sf-pro text-base md:text-sm 
          text-center font-semibold group-hover:text-blue-300 transition-colors duration-300
          truncate">
            {Name}
          </div>
          <div className="text-gray-400 font-sf-pro text-sm md:text-xs 
          text-center font-medium mt-1 group-hover:text-gray-300 transition-colors duration-300
          line-clamp-2">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

