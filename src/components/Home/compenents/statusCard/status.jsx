import React from 'react';
import Counter from './counter';

const StatsCard = () => {
  return (
    <div className="bg-[#0e0d0d] text-white py-16 px-6">
         <div className="container mx-auto max-w-6xl rounded-3xl" > 
    <div className='border-t border-t-white border-opacity-25  rounded-3xl'>
        <h3 className="text-base font-medium mt-5 ml-5 mb-12 bg-[#1C1C1C] inline-block px-6 py-3 rounded-full border-t border-t-white border-opacity-25 ">
  Our Stats
</h3>
<div  className='flex align-middle justify-between'  >
<div className=' ml-[400px]-mt-16 flex'>
        <div className='  mt-5 ml-5 text-right flex items-center justify-center w-32 h-32'> 
        <Counter end={6} duration={1000} /> 
        </div>
        <div className=' mr- mt-5 ml-5 flex items-center justify-center text-right w-32 h-32'>
        <Counter end={99} duration={1000} /> 
         </div>
        <div className=' mr-24 mt-5 ml-5 flex items-center justify-center text-right w-32 h-32'> 
        <Counter end={46} duration={1000} /> </div>
</div>
    </div>
       </div>
    </div>
    </div>
  );
};

export default StatsCard;