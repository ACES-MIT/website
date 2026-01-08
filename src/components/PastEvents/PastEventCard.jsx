import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";

const PastEventCard = ({ event }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technical: "bg-purple-600",
      Competition: "bg-pink-600",
      Workshop: "bg-blue-600",
      Festival: "bg-green-600",
      Awareness: "bg-orange-600"
    };
    return colors[category] || "bg-gray-600";
  };

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Category Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span className={`${getCategoryColor(event.category)} px-3 py-1 rounded-md text-white text-sm font-medium`}>
          {event.category}
        </span>
      </div>

      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        
        <img
          src={event.images[currentImageIndex]}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {event.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "w-6 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <Calendar size={14} className="mr-1" />
            {event.date}
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <Users size={14} className="mr-1" />
            {event.participants} Participants
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default PastEventCard;
