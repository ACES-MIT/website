import CoreTeamSection from "./Team/CoreTeamSection";
import OtherTeamsSection from "./Team/OtherTeamsSection";

import {
  coreTeamMembers,
  technicalTeamMembers,
  designTeamMembers,
  PromotionsTeamMembers,
  DocumentationTeamMembers,
  FinanceTeamMembers,
  CulturalTeamMembers,
  SocialMediaTeamMembers,
  ManagementTeamMembers
} from "./Team/teamData";

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
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

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
          title="Documentation Team"
          members={DocumentationTeamMembers}
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

        <OtherTeamsSection
          title="Management Team"
          members={ManagementTeamMembers}
        />

      </div>
    </div>
  );
};

export default OurTeam;