import React from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';

class EventCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div
            key="front"
            onClick={this.handleClick}
            className="flex justify-center items-center 
              w-[250px] h-[350px] md:w-[350px] md:h-[500px] xl:w-[500px] xl:h-[650px]
              bg-[rgb(35,35,35)] rounded-[11%] 
              transition-all duration-500 ease-in-out cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center w-[90%] h-[85%] rounded-[5%] bg-[rgb(31,31,31)] border-t-2 border-gray-400">
              <div className="w-[80%] h-[55%] relative mt-6 rounded-3xl bg-[rgb(40,40,40)]"></div>
              <div className="text-gray-200 text-lg sm:text-xl md:text-3xl xl:text-4xl mt-5 font-semibold font-sf-pro text-center">
                EVENT
              </div>
              <div className="text-gray-200 text-sm sm:text-md md:text-xl xl:text-2xl mt-3 font-semibold font-sf-pro text-center">
                ABOUT EVENT
              </div>
              <div className="text-gray-200 text-xs sm:text-sm md:text-lg xl:text-xl mt-2 font-semibold font-sf-pro text-center mb-4">
                1/1/2025
              </div>
            </div>
          </div>

          <div
            key="back"
            onClick={this.handleClick}
            className="flex justify-center items-center 
              w-[250px] h-[350px] md:w-[350px] md:h-[500px] xl:w-[500px] xl:h-[650px]
              bg-[rgb(35,35,35)] rounded-[11%] 
              transition-all duration-500 ease-in-out cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center w-[90%] h-[85%] rounded-[5%] bg-[rgb(31,31,31)] border-t-2 border-gray-400">
              <div className="text-gray-200 text-lg sm:text-xl md:text-3xl xl:text-4xl mt-5 font-semibold font-sf-pro text-center">
                EVENT DETAILS
              </div>
              <div className="text-gray-200 text-sm sm:text-md md:text-xl xl:text-2xl mt-3 font-semibold font-sf-pro text-center">
                More Info About The Event
              </div>
              <div className="text-gray-200 text-xs sm:text-sm md:text-lg xl:text-xl mt-2 font-semibold font-sf-pro text-center mb-4">
                Additional Info
              </div>
              <Link to="/register">
                <button className="bg-[rgb(35,35,35)] border border-[rgb(40,40,40)] w-[60%] h-[15%] font-sf-pro font-semibold text-lg text-white py-2 px-4 rounded-full mt-4">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default EventCard;
