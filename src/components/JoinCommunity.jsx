import React from 'react';
import  '../index.css';

const Community = () => {
return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/*background*/}
        <div className="flex items-center justify-center min-h-screen bg-black w-full h-full rounded-lg overflow-hidden" style={{ backgroundImage: 'url(https://framerusercontent.com/images/ETRqNWWMBEeXF5D05OggGRFDeec.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/*content*/}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
            {/*join button*/}
            <button className="bg-[#0c0a0ae6] text-white px-8 py-3 rounded-full border border-gray-700 shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 p-20 animate-bounce">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xl tracking-wider">Join our Community</span>
            </button>
            {/*email text*/}
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center mt-8 hover:scale-110 transition-transform duration-200 tracking-wide">
                parliamentofaces2018@gmail.com
            </h1>
        </div>
        </div>
    </div>
);
};

export default Community;