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
    
      // <GradientBox {...gradientConfig1} />
     
      
      <div className="container mx-auto px-4 sm:px-6 my-12 mb-8 md:mb-16 flex flex-col md:flex-row items-center justify-between md:space-x-10">
        <div className="flex items-center justify-center md:justify-start md:items-start md:w-1/3 md:pr-8 md:ml-10 mb-6 md:mb-0">
          <button className="bg-[#111111] mt-10 text-lg md:text-xl font-medium inline-block px-6 py-3 rounded-full">
            MORE INFO
          </button>
        </div>
        <div className="flex flex-col text-center md:text-left md:w-2/3 md:mr-10 px-4 md:px-0">
          <p className="mb-6 text-xl">
            ACES, the oldest and largest club at MIT ADT University's School of Computing, is a vibrant techno-cultural organization established in 2018-19. It empowers students with opportunities that go beyond academics, nurturing leadership, technical expertise, and cultural interests. Renowned for its consistency and dynamic events, ACES fosters excellence while building a strong sense of community among students and faculty alike.
          </p>
          <p className="text-xl">
            As an umbrella to other clubs within the School of Computing, ACES plays a pivotal role in bridging technology and culture. With its massive following and respected legacy, it provides a platform where students can thrive academically, socially, and creatively.
          </p>
        </div>
      </div>
   
  );
}

export default MoreInfo;
