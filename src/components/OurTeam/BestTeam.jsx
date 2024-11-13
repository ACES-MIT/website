import React from 'react';
import './BestTeam.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BestTeam() {
  React.useEffect(() => {
    gsap.to('.box1', {
      x: 449,
      y: 357,
      scale: 0.4,
      scrollTrigger: {
        trigger: '.div1',
        scrub: true,
        start: '40px',
                  
      }
    });

    gsap.to('.box2', {
      x: -554,
      y: -279,
      scale: 0.3,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.box3', {
      x: -517,
      y: 187,
      scale: 0.5,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
               
      }
    });

    gsap.to('.box4', {
      x: -288,
      y: 372,
      scale: 0.3,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.box5', {
      x: 239,
      y: -395,
      scale: 0.35,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.box6', {
      x: 496,
      y: -284,
      scale: 0.4,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.box7', {
      x: 392,
      y: 166,
      scale: 0.4,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.box8', {
      x: -245,
      y: -265,
      scale: 0.3,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

    gsap.to('.content', {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
      trigger: '.div1',
      start: '20px',
      scrub: true,
                
      }
    });

  }, []);

  return (
    <div className="App">
      <div className="hero"></div>

      <div className="scroll">
        <div className="div1">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5"></div>
          <div className="box box6"></div>
          <div className="box box7"></div>
          <div className="box box8"></div>
          <div className="content">
            <div className='flex items-center justify center flex-col' >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Team of the Month</h1>
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">Technical Team</h3>
            
            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              View Team
            </button> */}
            <div className="flex items-center justify-center md:rounded-full md:p-[2px] sm:bg-gradient-to-r md:from-transparent md:via-white to-transparent animate-border static">
  <button className="flex items-center bg-[#252525] text-lg text-white px-10 py-3 rounded-full shadow-inner mx-auto">
    <span className="flex h-4 w-3 mr-2">
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 animate-blink"></span>
    </span>
    Recent Event
  </button>
</div>


            
            



          </div>
            
            </div>

        </div>

        <div className="div2">
        </div>
      </div>
      <div className="hero"></div>

    </div>
  );
}

export default BestTeam;