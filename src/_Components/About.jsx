import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  function set1() {
    setIsHovered1(true);
    setIsHoveredDiv2(false);
    setIsHoveredDiv3(false);
  }

  function set2() {
    setIsHovered1(false);
    setIsHoveredDiv2(true);
    setIsHoveredDiv3(false);
  }

  function set3() {
    setIsHovered1(false);
    setIsHoveredDiv2(false);
    setIsHoveredDiv3(true);
  }

  return (
    <section id='about' className="text-white bg-[#333232] w-full sm:h-full min-h-screen flex flex-col md:justify-start">
      <div className="container mx-auto md:pt-10 px-4 mb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 w-full px-4 `}>
            <div ref={ref} className={`${inView ? 'animate-slide-in-left' : ''}`}>

            <h1 ref={ref} className="text-[40px] md:text-[60px] font-inter pt-10 mb-4 relative ">
              ABOUT
              <span className="absolute bottom-0 left-0 w-[111px] h-1 bg-white"></span>
            </h1>
            <p className="mb-4 font-poppins text-[17px] md:text-[22px] text-[#BFB8B8]">
              Time to brew your coffee and revisit your Spotify while we set the stage and tune our microphones.<br />
              A specially curated series of weekly podcasts to warm up your winter weekends, keep your eyes on PASS THE MIC.
            </p>
            </div>
            <div className="space-y-10 flex flex-col mt-[50px] md:mt-[87px] items-end">
              <div
                className={`flex flex-row justify-end items-end transition duration-300 ease-in`}
                onMouseEnter={set1}
                onMouseLeave={() => setIsHovered1(false)}
              >
                {isHovered1 ? (
                  <div className="relative w-full h-auto md:w-[396px] md:h-[65px] bg-[#FF93CD] text-white flex items-center justify-end clip-path-custom transition-all duration-1000">
                    <div className="text-end pl-2 pr-2 py-1 text-[13px] md:text-[16px] font-poppins">
                      A series of five weekly podcasts <br className='md:hidden' /> to <br className="hidden sm:inline" />
                      be released in the weekends starting soon.
                    </div>
                  </div>
                ) : (
                  <div className='transition-all duration-1000'>
                    <img src={podcastWrite} alt="" className="w-full h-[75px] md:h-[65px]" />
                  </div>
                )}
                <img src={podcastLogo} className="ml-5" alt="" />
              </div>
              <div
                className="flex flex-row items-end"
                onMouseEnter={set2}
                onMouseLeave={() => setIsHoveredDiv2(false)}
              >
                {isHoveredDiv2 ? (
                  <div className="relative w-full h-auto md:w-[525px] md:h-[65px] bg-[#FF93CD] md:p-0 text-white flex items-center justify-end clip-path-custom transition-all duration-1000">
                    <span className="text-end pl-2 py-1 pr-2 text-[13px] md:text-[15px] font-poppins">
                      Handpicked and assorted topics <br className='md:hidden' /> and  talks from one of the pioneers <br className='md:hidden'/> in the field, directly on your Spotify playlists.
                    </span>
                  </div>
                ) : (
                  <div className='transition-all duration-1000'>
                    <img src={liveWrite} alt="" className="w-full h-auto" />
                  </div>
                )}
                <img src={LiveLogo} className="ml-5" alt="" />
              </div>
              <div
                className="flex flex-row items-end"
                onMouseEnter={set3}
                onMouseLeave={() => setIsHoveredDiv3(false)}
              >
                {isHoveredDiv3 ? (
                  <div className="relative w-full h-auto md:w-[457px] md:h-[65px] bg-[#FF93CD] text-white flex items-center justify-end clip-path-custom transition-all duration-1000">
                    <span className="text-end pl-2 pr-3 py-1 text-[13px] md:text-[16px] font-poppins">
                      Spotify took us by the storm with #2020wrapped, <br className="hidden sm:inline" />
                      and it's time we <br className='md:hidden'/> take it by the storm.
                    </span>
                  </div>
                ) : (
                  <div className='transition-all duration-1000'>
                    <img src={SpotifyWrite} alt="" className="w-full h-auto" />
                  </div>
                )}
                <img src={SpotifyLogo} className="ml-5" alt="" />
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 w-full mt-24 md:mt-20 flex justify-center ${inView ? 'animate-slide-in-right' : ''}`}>
            <img src={girlListenSpotify} alt="a girl listens spotify" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
