import React, { useEffect } from "react";
import AboutAces from "./AboutAces";
import MoreInfo from "./more_Info";
import Timeline from "./timline";
import StatsSection from "./statsAbout";
import { useLocation } from "react-router-dom";

function About() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div className="min-h-screen bg-black text-white mt-24">
      <AboutAces />
      <MoreInfo />
      <StatsSection />
      <Timeline />
    </div>
  );
}

export default About;
