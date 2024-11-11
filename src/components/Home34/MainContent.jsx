// FILE: MainContent.jsx
import React from 'react';
import logo from './logo.png'; 

const MainContent = () => {
  return (
    <main className="flex flex-col items-center ">
      <div>
        <img src={logo} alt="Center Logo" className="h-40 w-auto mx-auto mb-6" />
      </div>
      <div className="text-3xl text-center md:text-5xl font-bold max-w-3xl mx-auto leading-tight ">
        ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
      </div>
      <div className="mt-4">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-200">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span> Join Us
        </button>
      </div>

      <p className="mt-6 text-lg">We are not a club, we are an association.</p>
      <div className=" text-center  font-bold  mx-auto leading-tight max-w-2xl m-3">
      Committed to the principles of Unity, Support, and Dedication.  
      With 6 years of hands-on experience in the industry.
      </div>
      {/* <p className="text-gray-400   max-w-md mx-auto">
        Committed to the principles of Unity, Support, and Dedication.  
        With 6 years of hands-on experience in the industry.
      </p> */}
      <a href="#" className="mt-4 inline-flex items-center text-white font-semibold hover:underline">
        More About Us →
      </a>
    </main>
  );
};

export default MainContent;