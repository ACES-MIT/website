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
         ACES, the oldest and largest club at MIT ADT University's School of Computing, is a vibrant techno-cultural organization established in 2018-19. It empowers students with opportunities that go beyond academics, nurturing leadership, technical expertise, and cultural interests. Renowned for its consistency and dynamic events, ACES fosters excellence while building a strong sense of community among students and faculty alike.
        </p>
        <p className="max-w-full text-xl md:max-w-lg lg:max-w-xl">
         As an umbrella to other clubs within the School of Computing, ACES plays a pivotal role in bridging technology and culture. With its massive following and respected legacy, it provides a platform where students can thrive academically, socially, and creatively.
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
