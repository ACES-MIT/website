import React from 'react';

const WhatWeDo = () => {
  const activities = [
    {
      number: "01",
      title: "Organize",
      description: "ACES hosts and coordinates various events, workshops, and seminars to enhance students' technical, cultural, and social skills."
    },
    {
      number: "02",
      title: "Collaborate",
      description: "ACES partners with diverse student clubs and organizations to promote interdisciplinary learning, networking, and teamwork."
    },
    {
      number: "03",
      title: "Manage University level Events",
      description: "ACES takes the lead in organizing and executing large-scale university events, conferences, and competitions, encouraging a spirit of community and excellence."
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h3 className="text-base font-medium mb-12 bg-[#1C1C1C] inline-block px-6 py-3 rounded-full">
          What we do?
        </h3>

        {/* Activities List */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.number}
              className="flex flex-col md:flex-row items-start md:items-center bg-[#1C1C1C] border-t border-t-white border-opacity-25 rounded-3xl p-6"
            >
              {/* Number and Title */}
              <div className="flex-shrink-0 md:w-1/2 pr-4">
                <h3 className="text-xl md:text-2xl font-medium flex items-center gap-2 ">
                  <span className="text-white">{activity.number}.</span>
                  <span>{activity.title}</span>
                </h3>
              </div>

              {/* Description */}
              <div className="flex-grow text-left md:text-center">
                <p className="text-white text-lg leading-relaxed ml-0 md:ml-12">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;