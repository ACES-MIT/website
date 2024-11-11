import React from 'react';

function MoreInfo() {
  return (
    <div className="bg-black text-white p-4 md:p-8">
      <div className="flex justify-center md:justify-start mb-6">
        <button className="bg-[#111111] ml-15 mt-10 rounded-full px-6 py-3 text-lg font-bold text-center">
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
