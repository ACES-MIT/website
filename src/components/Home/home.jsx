import { useRef, useEffect } from "react";
import logo from "./logo.png";
import WhatWeDo from "./compenents/whatwedo/WWD_tab";
import StatsSection from "./compenents/statusCard/status";
import Event from "./compenents/Event/Event";
import Faculty from "./compenents/faculty/Label";
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
    <div className="overflow-x-hidden w-full">
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
              className="h-40 md:h-44 w-auto mx-auto mb-12"
            />
          </div>
          <div
            ref={textRef}
            className="text-4xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight"
          >
            ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
          </div>

          <p className="mt-6 text-lg">
          &quot;For the Students By the Students&quot;
            
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
      
      {/* Divider Border */}
      <div className="bg-[#0e0d0d] px-6 py-6">
        <div className="container mx-auto max-w-7xl border-2 border-gray-600 rounded-2xl h-px"></div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="bg-[#0e0d0d] text-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Events Title & Description */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-col items-start">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4 block">
                    What&apos;s Happening
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Upcoming Events
                  </h2>
                  <div className="w-20 h-1 bg-white rounded-full mb-6"></div>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  Discover our latest events and join our vibrant community. From technical workshops to cultural celebrations, there&apos;s something for everyone.
                </p>
              </div>
            </div>
            
            {/* Right Side - Event Cards */}
            <div className="flex justify-center items-center">
              <div className="w-full">
                <Event />
              </div>
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

      <div className="bg-[#0e0d0d] py-12 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="overflow-hidden pb-4 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center relative">
              {FacultyData_Top
                ? FacultyData_Top.map((el, index) => (
                    <Faculty
                      key={index}
                      Name={el.Name}
                      position={el.position}
                      Image={el.Image}
                    />
                  ))
                : ""}
            </div>
          </div>

          <div className="overflow-hidden pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center relative">
              {FacultyData_Bottom
                ? FacultyData_Bottom.map((el, index) => (
                    <Faculty
                      key={index}
                      Name={el.Name}
                      position={el.position}
                      Image={el.Image}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
      <StatsSection />
      <WhatWeDo />
    </div>
  );
}

export default Home;
