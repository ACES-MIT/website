import { useState } from 'react';
// import './App.css';
import WhatWeDo from './WWD_tab';
import Footer from '../footer';
import JoinCommunity from '../JoinCommunity';
import OurFaculty from './OurFaculty';
import NavBar from '../NavBar';
import MainContent from './MainContent';





const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* <NavBar /> */}
      <MainContent />
        <OurFaculty />
      <WhatWeDo />
       <JoinCommunity />
      
        
      </div>
    </div>
  );
};

export default Home;