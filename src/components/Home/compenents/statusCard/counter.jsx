import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = duration / end; // Adjust the interval based on the duration and end count
    
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter); // Clean up the interval on component unmount
  }, [end, duration]);

  return (
    <div className='flex items-center justify-center'>
      <h1 className="text-5xl font-bold text-white">{count}</h1>
    </div>
  );
};

export default Counter;
