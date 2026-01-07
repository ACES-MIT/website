import { useState, useRef, useEffect } from "react";
import logo from "./logo.png";
import WhatWeDo from "./compenents/whatwedo/WWD_tab";
import StatsSection from "./compenents/statusCard/status";
import Event from "./compenents/Event/Event";
import Faculty from "./compenents/faculty/Label";
import useIntersectionObserver from "../useIntersectionObserver";
import GradientBox from "../gradient";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FacultyData_Bottom, FacultyData_Top } from "./Homedata";

function Home() {
  const navigate = useNavigate();

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    const textElement = textRef.current;

    if (logoElement && textElement) {
      setTimeout(() => {
        logoElement.classList.add("animate-riseUpSlow");
      }, 10); // 0.5 seconds delay

      setTimeout(() => {
        textElement.classList.add("animate-riseUpSlow");
      }, 10); // 3 seconds delay
    }
  }, []);

  return (
    <div>
      {/* <GradientBox position={{ top: '-115px', left: '-110px' }} width="250px" height="250px" color="#FF00E6"/> */}
      <GradientBox
        position={{ top: "-115px", left: "-110px" }}
        width="250px"
        height="250px"
        colorStops={[
          ["#FF00E6", "0%"],
          ["rgba(250, 47, 230, 0.5)", "30%"],
          ["rgba(0, 0, 0, 0)", "60%"],
          ["rgba(0, 0, 0, 0)", "100%"],
        ]}
      />

      <div className="min-h-screen bg-[#0e0d0d] text-white flex flex-col items-center">
        <main className="text-center space-y-6 pt-32 mt-8">
          <div ref={logoRef}>
            <img
              src={logo}
              alt="Center Logo"
              className="h-44 w-auto mx-auto mb-12"
            />
          </div>
          <div
            ref={textRef}
            className="text-4xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight"
          >
            ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
          </div>

          <p className="mt-6 text-lg">
          "For the Students By the Students"
            
          </p>
          <p className="text-gray-400 max-w-md mx-auto">
            We are not a club, we are an association.
            Committed to the principles of Unity, Support, and Dedication.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-white font-semibold hover:underline"
            onClick={() => navigate("/about")}
          >
            More About Us →
          </a>
        </main>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="bg-[#0e0d0d] text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-16">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              UPCOMING EVENTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-full max-w-5xl mx-auto scale-90">
              <Event />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0e0d0d] text-white  pt-16 pb-1 px-6">
        <div className="container mx-auto max-w-6xl rounded-3xl">
          <div className="flex justify-center border-t border-t-white border-opacity-25  rounded-3xl">
            <h3 className="text-base font-medium mt-5 ml-5 mb-2 bg-[#1C1C1C] inline-block px-6 py-3 rounded-full border-t border-t-white border-opacity-25 ">
              OUR MENTORS
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-[#0e0d0d] flex flex-col h-full w-full m-0 p-0">
        <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]">
          {FacultyData_Top
            ? FacultyData_Top.map((el) => (
                <Faculty
                  Name={el.Name}
                  position={el.position}
                  Image={el.Image}
                />
              ))
            : ""}
        </div>

        <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]">
          {FacultyData_Bottom
            ? FacultyData_Bottom.map((el) => (
                <Faculty
                  Name={el.Name}
                  position={el.position}
                  Image={el.Image}
                />
              ))
            : ""}
        </div>
      </div>
      <StatsSection />
      <WhatWeDo />
    </div>
  );
}

export default Home;




// import React, { useState, useEffect } from 'react';

// const CountingNumber = ({ end, duration = 2000 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTimestamp = null;
//     const endNum = parseInt(end);
    
//     const animate = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = timestamp - startTimestamp;
      
//       const progressPercentage = Math.min(progress / duration, 1);
//       const currentCount = Math.floor(progressPercentage * endNum);
      
//       setCount(currentCount);
      
//       if (progressPercentage < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(endNum);
//       }
//     };
    
//     requestAnimationFrame(animate);
//   }, [end, duration]);

//   return (
//     <span className="text-[56px] sm:text-[56px] md:text-[80px] font-bold text-white mb-2">
//       {count}{end.toString().endsWith('+') ? '+' : ''}
//     </span>
//   );
// };

// const StatItem = ({ number, label }) => (
//   <div className="flex flex-col items-center px-4 md:px-0">
//     <CountingNumber end={number} />
//     <span className="text-sm md:text-lg text-gray-300 text-center">{label}</span>
//   </div>
// );

// const StatsSection = () => {
//   return (
//     <div className="bg-[#0e0d0d] text-white py-16 px-4 sm:px-6">
//       <div className="container mx-auto max-w-6xl">
//         <div className="border-t border-t-white border-opacity-25 rounded-3xl">
//           {/* Centered header across all screen sizes */}
//           <div className="-mt-5 mb-10 flex justify-center">
//             <h2 className="mt-9 text-base font-medium bg-[#1C1C1C] inline-block py-3 rounded-full border-t border-t-white border-opacity-25 px-10">
//               OUR STATS 
//             </h2>
//           </div>

//           {/* Centered stat items */}
//           <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-8 md:gap-24 pb-10">
//             <StatItem number="6" label="Years of Experience" />
//             <StatItem number="99+" label="Aspiring minds" />
//             <StatItem number="26" label="Events" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default StatsSection;