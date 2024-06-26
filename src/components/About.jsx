import React, { useState, useEffect } from 'react';
import girlListenSpotify from '../assets/girlListenSpotify.svg';
import liveWrite from '../assets/liveWrite.svg';
import LiveLogo from '../assets/LiveLogo.svg';
import podcastLogo from '../assets/podcastLogo.svg';
import podcastWrite from '../assets/podcastWrite.svg';
import SpotifyLogo from '../assets/SpotifyLogo.svg';
import SpotifyWrite from '../assets/SpotifyWrite.svg';
import './customStyles.css';

const About = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHoveredDiv2, setIsHoveredDiv2] = useState(false);
  const [isHoveredDiv3, setIsHoveredDiv3] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="text-white bg-[#333232] w-full sm:h-full min-h-screen flex flex-col md:justify-start">
      <div className="container mx-auto md:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 w-full px-4 `}>
            <div className={`${isLoaded ? 'animate-slide-in-left' : ''}`}>

            <h1 className="text-[40px] md:text-[60px] font-inter pt-10 mb-4 relative">
              ABOUT
              <span className="absolute bottom-0 left-0 w-[111px] h-1 bg-white"></span>
            </h1>
            <p className="mb-4 font-poppins text-[22px] text-[#BFB8B8]">
              Time to brew your coffee and revisit your Spotify while we set the stage and tune our microphones.<br />
              A specially curated series of weekly podcasts to warm up your winter weekends, keep your eyes on PASS THE MIC.
            </p>
            </div>
            <div className="space-y-10 flex flex-col mt-[50px] md:mt-[87px] items-end">
              <div className={`flex flex-col md:flex-row justify-end items-end transition duration-300 ease-in`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                {
                  isHovered1 ? (
                    <div className="relative w-[396px] h-[65px] bg-[#FF93CD] text-white flex items-center justify-end clip-path-custom">
                      <span className="text-end p-4 text-[16px] font-poppins">
                        A series of five weekly podcasts to <br />
                        be released in the weekends starting soon.
                      </span>
                    </div>
                  ) : (
                    <div>
                      <img src={podcastWrite} alt="" />
                    </div>
                  )
                }
                <img src={podcastLogo} className="ml-5" alt="" />
              </div>
              <div className="flex flex-col md:flex-row items-end" onMouseEnter={() => setIsHoveredDiv2(true)} onMouseLeave={() => setIsHoveredDiv2(false)}>
                {
                  isHoveredDiv2 ? (
                    <div className="relative w-[525px] h-[65px] bg-[#FF93CD] text-white flex items-center justify-end clip-path-custom">
                      <span className="text-end pl-2 pr-2 text-[15px] font-poppins">
                        Handpicked and assorted topics and talks from one of the <br /> pioneers in the field, directly on your Spotify playlists.
                      </span>
                    </div>
                  ) : (
                    <div>
                      <img src={liveWrite} alt="" />
                    </div>
                  )
                }
                <img src={LiveLogo} className="ml-5" alt="" />
              </div>
              <div className="flex flex-col md:flex-row items-end" onMouseEnter={() => setIsHoveredDiv3(true)} onMouseLeave={() => setIsHoveredDiv3(false)}>
                {
                  isHoveredDiv3 ? (
                    <div className="relative w-[525px] h-[65px] bg-[#FF93CD] text-white flex items-center justify-end clip-path-custom">
                      <span className="text-end pl-2 pr-2 text-[16px] font-poppins">
                        Spotify took us by the storm with #2020wrapped, <br />
                        and it's time we take it by the storm
                      </span>
                    </div>
                  ) : (
                    <div>
                      <img src={SpotifyWrite} alt="" />
                    </div>
                  )
                }
                <img src={SpotifyLogo} className="ml-5" alt="" />
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 w-full mt-24 md:mt-20 flex justify-center ${isLoaded ? 'animate-slide-in-right' : ''}`}>
            <img src={girlListenSpotify} alt="a girl listens spotify" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
