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
            <h1>Team of the month</h1> 
            <h3>Technical Team</h3>
            
            <div className="loader">  </div>
            <button> <div className="s-circle"></div> <div className="circle"></div> View Team </button>
            
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