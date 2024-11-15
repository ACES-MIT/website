import CoreTeamSection from "./Team/CoreTeamSection";
import OtherTeamsSection from "./team/OtherTeamsSection";
import { coreTeamMembers, technicalTeamMembers } from "./team/teamData";
import TeamHeader from "./TeamHeader";
import BestTeam from "./BestTeam";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurTeam = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <TeamHeader />
        <CoreTeamSection members={coreTeamMembers} />
        <BestTeam />
        <OtherTeamsSection
          title="Technical Team"
          members={technicalTeamMembers}
        />
      </div>
    </div>
  );
};

export default OurTeam;
