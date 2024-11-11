import React from "react";
import Faculty from "./Label.jsx";

const OurFaculty = () => {
  return (
    <div className="bg-[rgb(10,10,10)] flex flex-col h-full w-full m-0 p-0">
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]"> 
        <Faculty />
        <Faculty />
        <Faculty />
      </div>
      <div className="flex flex-wrap justify-center md:gap-14 gap-4 mt-[3%]"> 
        <Faculty />
        <Faculty />
      </div>
    </div>
  );
}

export default OurFaculty;
