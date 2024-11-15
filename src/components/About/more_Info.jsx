import React from 'react';
import GradientBox from './gradient';
function MoreInfo() {
  const gradientConfig1 = {
    top: '100%',
    left: '0%',
    width: '300PX',
    height: '300PX',
    colorStops: [['rgba(250, 47, 230, 0.4)', '0%'], ['rgba(250, 47, 230, 0.4)', '10%'], ['rgba(0, 0, 0, 0)', '60%'], ['rgba(0, 0, 0, 0)', '100%']],
    borderRadius: '25%' // Custom border radius
  };
  
const gradientConfig2 = {
  top: '70%',
  left: '0%',
  width: '250PX',
  height: '250PX',
  colorStops: [['#FF00E6', '0%'], ['rgba(250, 47, 230, 0.5)', '20%'], ['rgba(0, 0, 0, 0)', '60%'], ['rgba(0, 0, 0, 0)', '100%']],
  borderRadius: '25%' // Custom border radius
};
  return (
    <div className="text-white p-4 md:p-8">
      <GradientBox {...gradientConfig1} />
      {/* <GradientBox {...gradientConfig2} /> */}
      <div className="flex justify-center md:justify-start mb-6">
        <button className="mt-9 ml-1 text-base font-medium bg-[#1C1C1C] inline-block py-3 rounded-full border-t border-t-white border-opacity-25 
                 sm:w-[150px] md:w-[120px] lg:w-auto xl:w-auto md:px-6 sm:px-10 px-10" >
          More Info
        </button>
        
            
            
      </div>

      <div className="flex flex-col text-center md:text-left md:items-end md:pr-20 lg:pr-40">
        <p className="mb-4 text-xl max-w-full md:max-w-lg lg:max-w-xl">
          Founded in A.Y. 2018-19, ACES was initiated by the CSE faculty and nurtured by enthusiastic students. Our goal is to bridge the gap between classroom learning and real-world applications, enabling students to reach their full potential.
        </p>
        <p className="max-w-full text-xl md:max-w-lg lg:max-w-xl">
          The Association of Computer Science Enthusiasts (ACES) is an autonomous student body under the Computer Science and Engineering (CSE) department at MIT ADT University. Our mission is to empower future Computer Science Engineers to explore their passions and interests.
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
