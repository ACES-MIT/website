import React, { useState } from "react";
// removed useNavigate - external registration opened in new tab
import ReactCardFlip from "react-card-flip";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";

const RegisterButton = ({ isClosed, link }) => {
  const handleRegister = (e) => {
    e.stopPropagation();
    if (isClosed) return;
    if (!link) return;
    // open external registration link in a new tab
    window.open(link, '_blank', 'noopener');
  };

  return (
    <button
      onClick={handleRegister}
      className={`w-full group/btn relative font-semibold text-sm md:text-base px-6 py-3 rounded-xl transition-all duration-300 ${
        isClosed
          ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/50 hover:scale-105'
      } flex items-center justify-center gap-2`}
      disabled={isClosed}
    >
      {isClosed ? 'Registration Closed' : (
        <>
          <span>Register Now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </>
      )}
    </button>
  );
};

const EventCard = ({ data }) => {
  const [isFlipped, setisFlipped] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setisFlipped(!isFlipped);
  }

  const CardContent = ({ children }) => (
    <div
      onClick={handleClick}
      className="group relative flex justify-center items-center 
          w-[280px] h-[420px] md:w-[360px] md:h-[480px] xl:w-[440px] xl:h-[580px]
          transition-all duration-500 ease-in-out cursor-pointer overflow-visible"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-[2px] transition-all duration-500 group-hover:p-[3px] group-hover:shadow-2xl group-hover:shadow-purple-500/50">
        <div className="absolute inset-[2px] bg-black rounded-2xl" />
      </div>
      
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
        {children}
      </div>
      
      {data?.isRegistrationClosed && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 flex items-center justify-center z-20 rounded-2xl backdrop-blur-sm">
          <div className="relative px-8 py-4">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-400/40 rounded-lg backdrop-blur-md" />
            <span className="relative z-10 text-white font-bold text-lg md:text-xl xl:text-2xl tracking-wide uppercase">
              Registration Closed
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardContent key="front">
          <div className="relative w-full h-full group">
            <img
              src={data?.Image}
              alt={data?.Name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Click hint */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">Click to view details</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardContent key="back">
          <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="flex-grow flex flex-col justify-center space-y-4">
              <h3 className="text-white text-xl md:text-2xl xl:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {data?.Details}
              </h3>
              
              <div className="space-y-3">
                {data?.MInfo && (
                  <div className="flex items-start gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-sm md:text-base leading-relaxed">{data?.MInfo}</p>
                  </div>
                )}
                
                {data?.AInfo && (
                  <div className="flex items-start gap-3 text-gray-400">
                    <Clock className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <p className="text-xs md:text-sm leading-relaxed">{data?.AInfo}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              <RegisterButton isClosed={data?.isRegistrationClosed} link={data?.Link} />
              
              <button 
                onClick={handleClick}
                className="text-gray-400 text-xs md:text-sm hover:text-white transition-colors duration-300"
              >
                ← Back to poster
              </button>
            </div>
          </div>
        </CardContent>
      </ReactCardFlip>
    </div>
  );
};

export default EventCard;
