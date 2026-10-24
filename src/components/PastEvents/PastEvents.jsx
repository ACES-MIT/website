
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import PastEventCard from "./PastEventCard";
import EventMemories from "./EventMemories";
import { pastEventsData } from "./pastEventsData";

// IMPORTANT: Your actual folder is named "compenents".
import EventCard from "../Home/compenents/Event/EventCard.jsx";
import { EventData } from "../Home/compenents/Event/EventData.js";

const STATUS_OPTIONS = ["All Events", "Upcoming", "Past Events"];

const CATEGORY_OPTIONS = [
  "All",
  "Technical",
  "Cultural",
  "Social",
  "Awareness",
];

const PastEvents = () => {
  const [selectedStatus, setSelectedStatus] = useState("All Events");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Combine both datasets.
  const allEvents = useMemo(() => {
    const upcoming = EventData.map((event) => ({
      ...event,
      status: event.status || "upcoming",
      category: event.category || event.Category || "Other",
      source: "upcoming",
    }));

    const past = pastEventsData.map((event) => ({
      ...event,
      status: "past",
      category: event.category || event.Category || "Other",
      source: "past",
    }));

    return [...upcoming, ...past];
  }, []);

  // Filter by status and category.
  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesStatus =
        selectedStatus === "All Events" ||
        (selectedStatus === "Upcoming" &&
          event.status === "upcoming") ||
        (selectedStatus === "Past Events" &&
          event.status === "past");

      const matchesCategory =
        selectedCategory === "All" ||
        event.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchesStatus && matchesCategory;
    });
  }, [allEvents, selectedStatus, selectedCategory]);

  const upcomingCount = allEvents.filter(
    (event) => event.status === "upcoming"
  ).length;

  const pastCount = allEvents.filter(
    (event) => event.status === "past"
  ).length;

  const totalParticipants = pastEventsData.reduce((total, event) => {
    const participants = parseInt(
      String(event.participants || "0").replace(/\D/g, ""),
      10
    );

    return total + (Number.isNaN(participants) ? 0 : participants);
  }, 0);

  return (
    <main className="min-h-screen bg-black text-white pt-[105px]">
      {/* Hero section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-medium">
              OUR COMMUNITY
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Events
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover upcoming experiences and relive the moments
            that brought our community together.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Events", value: allEvents.length },
            { label: "Upcoming Events", value: upcomingCount },
            { label: "Past Events", value: pastCount },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>

              <div className="text-gray-400 text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          {totalParticipants.toLocaleString()}+ participants in recorded past events
        </p>
      </section>

      {/* Status filters */}
      <section className="px-4 pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-3">
          {STATUS_OPTIONS.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setSelectedStatus(status)}
              aria-pressed={selectedStatus === status}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedStatus === status
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </section>

      {/* Category filters */}
      <section className="px-4 py-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {CATEGORY_OPTIONS.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-purple-400">
            {filteredEvents.length}
          </span>
          <span className="text-gray-400">
            {" "}
            {filteredEvents.length === 1 ? "event" : "events"}
          </span>
        </div>
      </section>

      {/* Combined events grid */}
      <section className="px-4 py-10 md:px-8 lg:px-16">
        {filteredEvents.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center items-start">
            {filteredEvents.map((event, index) => (
              <article
                key={`${event.source}-${event.id ?? index}`}
                className="relative w-full min-w-0 flex justify-center"
              >
                <span
                  className={`absolute top-3 left-3 z-30 px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === "upcoming"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  {event.status === "upcoming"
                    ? "Upcoming"
                    : "Completed"}
                </span>

                {event.source === "upcoming" ? (
                  <EventCard data={event} />
                ) : (
                  <PastEventCard event={event} />
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-white mb-3">
              No events found
            </h2>

            <p className="text-gray-400">
              Try selecting another status or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSelectedStatus("All Events");
                setSelectedCategory("All");
              }}
              className="mt-5 px-5 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Memories */}
      {selectedStatus !== "Upcoming" &&
        selectedCategory === "All" && <EventMemories />}
    </main>
  );
};

export default PastEvents;
