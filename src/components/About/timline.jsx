import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserCircle,
  FaLeaf,
  FaBullhorn,
  FaSmile,
  FaDatabase,
  FaBars,
  FaPlaneDeparture,
  FaRocket,
  FaLaptopCode,
  FaEnvelopeOpen,
  FaAd,
  FaBug,
  FaCamera,
  FaChartPie,
  FaRocketchat,
} from "react-icons/fa";
// import { FetchRes } from "../service/API";

const Timeline = () => {
  const [timelineItems, setTimelineItems] = useState([
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    {
      year: 2022,
      Title: "Coding the Future",
      Description: "This is the description for coding the future",
    },
    // {
    //   year: 2022,
    //   Title: "Coding the Future",
    //   Description: "This is the description for coding the future",
    // },
    // {
    //   year: 2022,
    //   Title: "Coding the Future",
    //   Description: "This is the description for coding the future",
    // },
    // {
    //   year: 2022,
    //   Title: "Coding the Future",
    //   Description: "This is the description for coding the future",
    // },
  ]);
  const TimelineIcons = [
    <FaUserCircle />,
    <FaLeaf />,
    <FaBullhorn />,
    <FaSmile />,
    <FaDatabase />,
    <FaBars />,
    <FaPlaneDeparture />,
    <FaRocket />,
    <FaLaptopCode />,
    <FaEnvelopeOpen />,
    <FaAd />,
    <FaBug />,
    <FaCamera />,
    <FaChartPie />,
    <FaRocketchat />,
  ];

  // useEffect(() => {
  //   const FData = async () => {
  //     try {
  //       const response = await FetchRes("timelines");
  //       // console.log(response.data);
  //       setTimelineItems(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   FData();
  // }, []);

  const IconAssign = () => {
    return TimelineIcons[Math.floor(Math.random() * TimelineIcons.length)];
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  

  return (
    <div lassName="min-h-screen bg-black text-white">
      
      <div className="bg-black text-white p-4 md:p-8 mt-32">
      
  {/* Header Section */}
  <div className="mb-8 md:mb-16 flex flex-col md:flex-row items-center" >
    <button className="bg-[#111111] ml-15 mt-10 text-lg md:text-xl font-medium inline-block px-4 py-2 rounded-full mb-4 md:mb-0 md:mr-4">
      Our Milestone
    </button>
    <p className="text-center mt-10 md:text-left text-base md:text-2xl max-w-2xl md:mr-8 md:ml-auto px-2">
      Explore ACES journey, from inception to significant milestones, marking our growth and achievements.
    </p>
  </div>
       </div>
        <section className="bg-black mb-20">
          <div className="md:mt-24 mt-12 text-[#CA80FF]">
            <div className="hidden md:block mt-12 mb-72">
              {/* Timeline for desktop */}
              <div className="relative w-full px-4 md:px-8">
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg font-bold">2019</span>
                  <span className="text-lg font-bold">2020</span>
                  <span className="text-lg font-bold">2022</span>
                  <span className="text-lg font-bold">2023</span>
                  <span className="text-lg font-bold">2024</span>
                </div>

                <div className="flex justify-around items-center w-full pt-7">
                  <AnimatePresence>
                    {timelineItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item flex flex-col items-center justify-center relative md:flex-row"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: index * 0.2 }}
                      >
                        {/* Timeline Line */}
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bg-gray-300"
                          style={{ width: '2px', height: '160%' }}
                        ></div>

                        {/* Timeline Dot */}
                        <div className="timeline-dot absolute top-[190%] left-1/2 transform -translate-x-1/2">
                          {IconAssign()}
                        </div>

                        {/* Timeline Content */}
                        <div className="timeline-content mt-36 text-lg font-medium absolute p-2 bg-main text-center transform left-1/2 -translate-x-1/2 md:left-auto md:transform-none">
                          <div
                            className="relative z-10 opacity-0 transition-opacity duration-300 hover:opacity-100 mt-12 pt-8 w-full md:w-[200%] md:left-[-40px]"
                          >
                            <h3 className="text-lg font-bold mb-2 text-main-sc-dark">
                              {item["Title"]}
                            </h3>
                            <p className="text-sm">
                              {item["Description"]}
                            </p>
                          </div>
                        </div>

                        {/* Hover effect lines */}
                        <motion.div
                          className="relative lg:block"
                          transition={{ duration: 0.3 }}
                        >
                          | | | | | | | | |
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile view message */}
            <div className="block md:hidden my-24 text-center text-lg font-bold">
              Turn ON Desktop Mode For Timeline
            </div>
          </div>
        </section>
    
    </div>
    );
};

export default Timeline;