import React from "react";
import EventCard from "./EventCard.jsx";

const Event = () => {
  return (
    <div className="bg-[rgb(10,10,10)] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 h-screen w-screen">
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Event;
