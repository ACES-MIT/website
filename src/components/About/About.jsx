import React from 'react';
import AboutAces from './AboutAces';
import MoreInfo from './more_Info';
import Timeline from './timline';


function About() {
    return (
        <div className="min-h-screen bg-black text-white mt-24">
        <AboutAces />
        <MoreInfo />
        <Timeline />

        </div>
    );
}

export default About;
