import React from "react";
import EventCard from "./EventCard.jsx";
import { EventData } from "./EventData.js";

const Event = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl px-4">
      {EventData ? EventData.map((el, index) => <EventCard key={index} data={el} />) : ""}
    </div>
  );
};

export default Event;
