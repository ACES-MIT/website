import React from "react";
import EventCard from "./EventCard.jsx";
import { EventData } from "./EventData.js";

const Event = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 w-full max-w-6xl">
      {EventData ? EventData.map((el, index) => <EventCard key={index} data={el} />) : ""}
    </div>
  );
};

export default Event;
