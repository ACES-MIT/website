import React from 'react';
import AboutAces from './AboutAces';
import MoreInfo from './more_Info';
import Timeline from './timline';
import StatsSection from './statsAbout'

function About() {
    return (
        <div className="min-h-screen bg-black text-white mt-24">
        <AboutAces />
        <MoreInfo />
        <StatsSection/>
        <Timeline />

        </div>
    );
}

export default About;
