import { useState, useRef, useEffect } from 'react';

import logo from './logo.png';


import WhatWeDo from './compenents/whatwedo/WWD_tab';
import StatsSection from './compenents/statusCard/status';
 import Event from './compenents/Event/Event';
import Faculty from './compenents/faculty/Label';
import useIntersectionObserver from '../useIntersectionObserver';
import GradientBox from '../gradient';

function Home() {
  

  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  

  useEffect(() => {
    const logoElement = logoRef.current;
    const textElement = textRef.current;

    if (logoElement && textElement) {
      setTimeout(() => {
        logoElement.classList.add('animate-riseUpSlow');
      }, 500); // 0.5 seconds delay

      setTimeout(() => {
        textElement.classList.add('animate-riseUpSlow');
      }, 600); // 3 seconds delay
    }
  }, []);
 

  return (

    <div>
      <GradientBox position={{ top: '-115px', left: '-110px' }} width="250px" height="250px" color="#FF00E6"/>

      
       <div className="min-h-screen bg-[#0e0d0d] text-white flex flex-col items-center">

        
      
       <main   className="text-center space-y-6 mt-36"> 
        <div  ref={logoRef}>
          <img src={logo} alt="Center Logo" className="h-44 w-auto mx-auto mb-12 mt-16" />
        </div>
        <div ref={textRef} className="text-4xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
          ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
        </div>

        <p className="mt-6 text-lg">We are not a club, we are an association.</p>
        <p className="text-gray-400 max-w-md mx-auto">
          Committed to the principles of Unity, Support, and Dedication with years of hands-on experience in the industry.
        </p>
        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold hover:underline">
          More About Us →
        </a>
      </main>
      
   


    </div>
    <div className="bg-[#0e0d0d] text-white py-16 px-6">
         <div className="container mx-auto max-w-6xl rounded-3xl" > 
    <div className='border-t border-t-white border-opacity-25  rounded-3xl'>
        <h3 className="text-base font-medium mt-5 ml-5 mb-12 bg-[#1C1C1C] inline-block px-6 py-3 rounded-full border-t border-t-white border-opacity-25 ">
  Upcoming Events
</h3>
 
     </div>
    </div>
    </div>
    <div className="bg-[#0e0d0d] flex justify-center items-center w-full min-h-screen gap-28 flex-wrap">
       <Event /> 
    </div>

    <div className="bg-[#0e0d0d] text-white py-16 px-6">
         <div className="container mx-auto max-w-6xl rounded-3xl" > 
    <div className='border-t border-t-white border-opacity-25  rounded-3xl'>
        <h3 className="text-base font-medium mt-5 ml-5 mb-12 bg-[#1C1C1C] inline-block px-6 py-3 rounded-full border-t border-t-white border-opacity-25 ">
        Our Faculty coordinator</h3>
 
     </div>
    </div>
    </div>
    
    <div className="bg-[#0e0d0d] flex flex-col h-full w-full m-0 p-0">
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]"> 
        <Faculty />
        <Faculty />
        <Faculty />
      </div>
      
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]"> 
        <Faculty />
        <Faculty />
      </div>
    </div>
    <StatsSection/>
    <WhatWeDo/>
    
    </div>
    
    
  );
}

export default Home;
