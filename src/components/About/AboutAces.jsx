import React from 'react';
import GradientBox from './gradient';

// Configuration for the gradient boxes
const gradientConfig1 = {
  top: '-50%',
  left: '-2%',
  width: '39%',
  height: '110%',
  colorStops: [['#FF00E6', '0%'], ['rgba(250, 47, 230, 0.5)', '10%'], ['rgba(0, 0, 0, 0)', '60%'], ['rgba(0, 0, 0, 0)', '100%']],
  borderRadius: '25%' // Custom border radius
};

const gradientConfig2 = {
  top: '70%',
  left: '101%',
  width: '35%',
  height: '100%',
  colorStops: [['rgba(149, 0, 255, 0.4)', '0%'], ['rgba(149, 0, 255, 0.4)', '10%'], ['rgba(0, 0, 0, 0)', '60%'], ['rgba(0, 0, 0, 0)', '100%']],
  borderRadius: '50px' // Custom border radius
};

function AboutAces() {
  return (
    <div className=" text-white text-center py-8 md:py-12 lg:py-16 relative">
      <GradientBox {...gradientConfig1} />
      <h1 className="text-11xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 animate-riseUpSlow delay-75">
        ABOUT ACES
      </h1>
      <p className="text-base md:text-4xl lg:text-xl mb-2 md:mb-3 lg:mb-4 block animate-riseUpSlow delay-550">
        "For the Students By the Students"
      </p>
      <p className="text-base md:text-lg lg:text-xl block animate-riseUpSlow delay-550">
        We are not a Club, We are an Association.
        <p>Committed to the principles of Unity, Support, and Dedication.</p>
      </p>
      <GradientBox {...gradientConfig2} />
    </div>
  );
}

export default AboutAces;
