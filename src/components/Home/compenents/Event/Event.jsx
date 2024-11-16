import React from "react";
import EventCard from "./EventCard.jsx";
import { EventData } from "./EventData.js";

const Event = () => {
  return (
    <div className="bg-[#0e0d0d] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 h-screen w-screen">
      {EventData ? EventData.map((el) => <EventCard data={el} />) : ""}
    </div>
  );
};

export default Event;
