import React, { useState, useEffect } from 'react';

const CountingNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endNum = parseInt(end);
    
    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const progressPercentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressPercentage * endNum);
      
      setCount(currentCount);
      
      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="text-[56px] sm:text-[56px] md:text-[80px] font-bold text-white mb-2">
      {count}{end.toString().endsWith('+') ? '+' : ''}
    </span>
  );
};

const StatItem = ({ number, label }) => (
  <div className="flex flex-col items-center px-4 md:px-0">
    <CountingNumber end={number} />
    <span className="text-sm md:text-lg text-gray-300 text-center">{label}</span>
  </div>
);

const StatsSection = () => {
  return (
    <div className="bg-[#0e0d0d] text-white py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
    <div className="border-t border-t-white border-opacity-25  rounded-3xl">
      {/* Height for different screen sizes */}
      <div className="-mt-5 md:mb-8 flex justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start mb-10">
  <h2 className="mt-9 ml-1 text-base font-medium bg-[#1C1C1C] inline-block py-3 rounded-full border-t border-t-white border-opacity-25 
                 sm:w-[150px] md:w-[120px] lg:w-auto xl:w-auto md:px-6 sm:px-10 px-10">
    Our Stats    
  </h2>
</div>

      <div className="flex mr-6  flex-col sm:flex-col md:flex-row md:justify-end items-center gap-8 md:gap-24 md:h-auto sm:h-auto">
        <StatItem number="6" label="Years of Experience" />
        <StatItem number="99+" label="Aspiring minds" />
        <StatItem number="46" label="Events" />
      </div>
    </div>
    </div>
    </div>
  );
};
export default StatsSection;