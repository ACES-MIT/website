import React from 'react';

const GradientBox = ({ position, width = '12rem', height = '12rem', colorStops = [['rgba(255, 0, 230, 1)', '0%'], ['rgba(250, 47, 230, 0.5)', '30%'], ['rgba(0, 0, 0, 0)', '60%']] }) => {
  const gradientStops = colorStops.map(([color, stop]) => `${color} ${stop}`).join(', ');
  const style = {
    top: position.top,
    left: position.left,
    opacity: 0.45,
    borderRadius: '201px',
    width: width,
    height: height,
    background: `radial-gradient(circle, ${gradientStops})`,
  };

  return (
    <div
      className="absolute"
      style={style}
    ></div>
  );
};

export default GradientBox;
