import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const CoreTeamSection = ({ members }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24 animate-fadeInUp">
      <div className="text-center mb-8 sm:mb-12">
        <span className="inline-block bg-gray-800 text-white px-4 sm:px-6 py-2 
          rounded-full text-base sm:text-lg font-medium transition-all 
          duration-300 hover:bg-gray-700">
          Core Team
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div className="flex justify-center" key={index}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTeamSection;