import React from 'react';

// A functional component to create a gradient box
const GradientBox = ({ top = '50%', left = '50%', width = '12rem', height = '12rem', colorStops, borderRadius = '0' }) => {
  // Create the gradient stops string from the colorStops array
  const gradientStops = colorStops.map(([color, stop]) => `${color} ${stop}`).join(', ');

  // Define the style for the gradient box
  const style = {
    position: 'absolute',
    top: top,
    left: left,
    transform: 'translate(-50%, -50%)', 
    width: width,
    height: height,
    background: `radial-gradient(circle, ${gradientStops})`,
    borderRadius: borderRadius, 
  };

  return <div style={style}></div>;
};

GradientBox.defaultProps = {
  colorStops: [['rgba(255, 0, 230, 1)', '0%'], ['rgba(250, 47, 230, 0.5)', '30%'], ['rgba(0, 0, 0, 0)', '60%']],
  borderRadius: '50%' // Default border radius
};

export default GradientBox;
