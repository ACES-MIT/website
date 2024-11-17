import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTeamDisplay = () => {
  useEffect(() => {
    const animations = [
      {
        target: '.box1',
        x: 449,
        y: 357,
        scale: 0.4
      },
      {
        target: '.box2',
        x: -554,
        y: -279,
        scale: 0.3
      },
      {
        target: '.box3',
        x: -517,
        y: 187,
        scale: 0.5
      },
      {
        target: '.box4',
        x: -288,
        y: 372,
        scale: 0.3
      },
      {
        target: '.box5',
        x: 239,
        y: -395,
        scale: 0.35
      },
      {
        target: '.box6',
        x: 496,
        y: -284,
        scale: 0.4
      },
      {
        target: '.box7',
        x: 392,
        y: 166,
        scale: 0.4
      },
      {
        target: '.box8',
        x: -245,
        y: -265,
        scale: 0.3
      }
    ];

    // Create a timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top top',
        end: '+=300%', // Controls how long the animation takes to complete
        pin: true, // Pins the section
        scrub: 1, // Smooth scrubbing effect
        anticipatePin: 1, // Prevents jittering
        pinSpacing: true
      }
    });

    // Add box animations to timeline
    animations.forEach(({ target, x, y, scale }) => {
      tl.to(target, {
        x,
        y,
        scale,
        duration: 1,
        ease: 'power1.inOut'
      }, 0); // The "0" means all animations start at the same time
    });

    // Add content fade in to timeline
    tl.to('.content', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.inOut'
    }, 0.5); // Starts slightly after the boxes begin moving

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const boxStyle = `
    absolute h-[440px] w-[440px] rounded-[80px] bg-cover bg-center bg-no-repeat
    md:h-[440px] md:w-[440px] sm:h-[220px] sm:w-[220px] sm:rounded-[40px]
  `;

  const images = [
    'url(src/components/OurTeam/BestTeam/IMG_2015.jpg)',
    'url(src/components/OurTeam/BestTeam/IMG_2645.jpg)',
    'url(src/components/OurTeam/BestTeam/IMG_5458.jpg)',
    'url(src/components/OurTeam/BestTeam/club.jpg)',
    'url(src/components/OurTeam/BestTeam/IMG_4183.JPG)',
    'url(src/components/OurTeam/BestTeam/IMG_2726.jpg)',
    'url()',
    'url()'
  ];

  return (
    <div className="flex flex-col bg-black">
      <div className="h-screen bg-black" />
      
      <div className="animation-container bg-black">
        <div className="relative h-screen w-full">
          <div className="flex h-screen w-full items-center justify-center flex-wrap gap-5">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={`${boxStyle} box${i + 1}`}
                style={{ backgroundImage: images[i] }}
              />
            ))}
            
            <div className="content opacity-0 scale-0 -z-10 text-center">
              <div className='flex items-center justify-center flex-col'>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">ACES</h1>
                <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2"></h3>
                <div className="flex items-center justify-center md:rounded-full md:p-[2px] sm:bg-gradient-to-r md:from-transparent md:via-white to-transparent animate-border static">
                  <button className="flex items-center bg-[#252525] text-lg text-white px-10 py-3 rounded-full shadow-inner mx-auto">
                    <span className="flex h-4 w-3 mr-2">
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 animate-blink"></span>
                    </span>
                    View Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-screen bg-black" />
    </div>
  );
};

export default AnimatedTeamDisplay;
