
import EventCard from "./EventCard.jsx";
import { EventData } from "./EventData.js";

const Event = () => {
  const upcomingEvents = EventData.filter(
    (event) => (event.status || "upcoming") === "upcoming"
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      {upcomingEvents.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={event.id || index}
              data={event}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-10">
          No upcoming events at the moment.
        </p>
      )}
    </section>
  );
};

export default Event;
