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
    <div className="text-white text-center py-4 md:py-6 lg:py-8 relative">
      <GradientBox {...gradientConfig1} />
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 animate-riseUpSlow delay-75 leading-tight">
          ABOUT ACES
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8 animate-riseUpSlow delay-550 text-purple-300">
          "For the Students, By the Students"
        </p>
        <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 animate-riseUpSlow delay-550 space-y-3">
          <p>We are not a Club, We are an Association.</p>
          <p>Committed to the principles of Unity, Support, and Dedication.</p>
        </div>
      </div>
      <GradientBox {...gradientConfig2} />
    </div>
  );
}

export default AboutAces;
