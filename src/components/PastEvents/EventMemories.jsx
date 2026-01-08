import React from "react";
import MagicBento from "../MagicBento";

const EventMemories = () => {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center max-w-[2200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Event </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Memories
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Capturing the moments that made our journey unforgettable
          </p>
        </div>

        {/* Magic Bento Grid - Centered with increased width and height */}
        <div className="flex items-center justify-center w-full transform scale-125">
          <MagicBento />
        </div>
      </div>
    </section>
  );
};

export default EventMemories;
