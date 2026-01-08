import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PastEventCard from "./PastEventCard";
import EventMemories from "./EventMemories";
import { pastEventsData, eventCategories } from "./pastEventsData";

const PastEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(pastEventsData);

  const routePath = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredEvents(pastEventsData);
    } else {
      setFilteredEvents(
        pastEventsData.filter((event) => event.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Stats calculation
  const totalEvents = pastEventsData.length;
  const totalParticipants = pastEventsData.reduce((acc, event) => {
    const num = parseInt(event.participants.replace(/\D/g, ""));
    return acc + num;
  }, 0);
  const totalCategories = [...new Set(pastEventsData.map(e => e.category))].length;

  return (
    <div className="min-h-screen bg-black text-white pt-[105px]">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-medium">
              OUR JOURNEY
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Past </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Relive the moments that defined our community through innovation,
            collaboration, and celebration
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {totalEvents}+
            </div>
            <div className="text-gray-400 text-sm tracking-wider uppercase">
              Events Organized
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {totalParticipants}+
            </div>
            <div className="text-gray-400 text-sm tracking-wider uppercase">
              Total Participants
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {totalCategories}+
            </div>
            <div className="text-gray-400 text-sm tracking-wider uppercase">
              Event Categories
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {eventCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-transparent border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Count */}
        <div className="text-center mt-8">
          <span className="text-purple-400">{filteredEvents.length}</span>
          <span className="text-gray-400"> events</span>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <PastEventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No events found in this category.</p>
          </div>
        )}
      </section>

      {/* Event Memories Section */}
      <EventMemories />
    </div>
  );
};

export default PastEvents;
