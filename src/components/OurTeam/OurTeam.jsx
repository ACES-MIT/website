import CoreTeamSection from "./Team/CoreTeamSection";
import OtherTeamsSection from "./Team/OtherTeamsSection";
import { coreTeamMembers, technicalTeamMembers,designTeamMembers,CulturalTeamMembers,FinanceTeamMembers,ContentTeamMembers,PromotionsTeamMembers,SocialMediaTeamMembers} from "./Team/teamData";
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
       <OtherTeamsSection
          title="Design Team"
          members={designTeamMembers}
        />
            <OtherTeamsSection
          title="Promotions Team"
          members={PromotionsTeamMembers}
          />
          <OtherTeamsSection
          title="Content Team"
          members={ContentTeamMembers}
          />
          <OtherTeamsSection
          title="Finance Team"
          members={FinanceTeamMembers}
          />
          <OtherTeamsSection
          title="Cultural Team"
          members={CulturalTeamMembers}
          />
          <OtherTeamsSection
          title="Social Media Team"
          members={SocialMediaTeamMembers}
          />
      </div>
    </div>
  );
};

export default OurTeam;
