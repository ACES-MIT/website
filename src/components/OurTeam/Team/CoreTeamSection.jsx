import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const CoreTeamSection = ({ members }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8 animate-fadeInUp">
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block bg-gray-800 text-white px-4 sm:px-6 py-2 
          rounded-full text-base sm:text-lg font-medium transition-all 
          duration-300 hover:bg-gray-700">
          Core Team
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto place-items-center">
        {members.map((member, index) => (
          <TeamMemberCard member={member} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CoreTeamSection;