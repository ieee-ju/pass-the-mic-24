import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import background from '../assets/background.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

function Landing() {
    const date = "2 August 2024 6:05 PM";

    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);

    const [isNavVisible, setNavVisible] = useState(false);

    const mobileResponsiveNavOption = () => {
        setNavVisible(prevState => !prevState);
        const sidebar = document.getElementById("sideBar");
        const hamburger = document.getElementById("hamburger");

        if (sidebar.classList.contains("right-0")) {
            sidebar.classList.remove("right-0");
            sidebar.classList.add("-right-full");
            hamburger.classList.remove("rotate-180");
        } else {
            sidebar.classList.remove("-right-full");
            sidebar.classList.add("right-0");
            hamburger.classList.add("rotate-180");
        }
    };

    const navButtonLinkUtility = (location) => {
        window.location.href = location;
    };

    const timerFunction = () => {
        const end = new Date(date);
        const now = new Date();
        const timeLeft = (end - now) / 1000;

        const days = Math.floor(timeLeft / (3600 * 24));
        const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = Math.floor(timeLeft % 60);

        setDays(days < 10 ? (days < 0? `00` : `0${days}` ): `${days}`);
        setHours(hours < 10 ? (hours< 0? `00`:`0${hours}` ): `${hours}`);
        setMinutes(minutes < 10 ? (minutes<0? `00`:`0${minutes}`) : `${minutes}`);
        setSeconds(seconds < 10 ? (seconds<0? `00` : `0${seconds}`) : `${seconds}`);
    };

    useEffect(() => {
        const interval = setInterval(timerFunction, 1000);
        return () => clearInterval(interval);
    }, []);

    
    return (
        <section id='home' className='relative overflow-x-hidden w-screen h-screen sm:max-w-full'>
            <div className='absolute w-full h-full sm:max-w-full'>
                <img src={background} alt="background" className='relative h-full object-cover object-left sm:w-full sm:object-top' />
            </div>
            {/* navbar */}
            <nav className='position: relative w-full h-1/6 flex items-center'>
                <img src={logo} alt="logo" className='position: relative h-2/4 ml-8' />
                <AnimatePresence>
                    {isNavVisible ? (
                        <motion.div
                            key='close'
                            initial={{ opacity: 0, scale: 0, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className='fixed right-0 mr-6 text-3xl text-neutral-300 sm:hidden z-20'
                            onClick={mobileResponsiveNavOption}
                        >
                            <MdClose />
                        </motion.div>
                    ) : (
                        <motion.div
                            key='hamburger'
                            initial={{ opacity: 0, scale: 0, rotate: 90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0, rotate: -90 }}
                            transition={{ duration: 0.3 }}
                            className='absolute right-0 mr-6 text-3xl text-neutral-400 sm:hidden z-20'
                            onClick={mobileResponsiveNavOption}
                        >
                            <GiHamburgerMenu />
                        </motion.div>
                    )}
                </AnimatePresence>

                <ul className='position: absolute right-0 flex h-full items-center text-neutral-300 mr-8 font-poppins invisible sm:visible'>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'>
                        <button onClick={e => { return navButtonLinkUtility("#home") }} className='uppercase'>Home</button>
                    </li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'>
                        <button onClick={e => { return navButtonLinkUtility("#about") }} className='uppercase'>About</button>
                    </li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'>
                        <button onClick={e => { return navButtonLinkUtility("#episodes") }} className='uppercase'>Episodes</button>
                    </li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'>
                        <button onClick={e => { return navButtonLinkUtility("#speakers") }} className='uppercase'>Speakers</button>
                    </li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'>
                        <button onClick={e => { return navButtonLinkUtility("#contact") }} className='uppercase'>Contact</button>
                    </li>
                </ul>
            </nav>

            {/* mobile responsive sidebar */}
            <aside id='sideBar' className='fixed top-0 w-[55vw] h-screen -right-full bg-gradient-to-b from-pink-900 to-pink-500 z-10 transition-all duration-300 ease-in-out sm:hidden '>
                <ul className='text-neutral-300 uppercase mt-[46.67%]'>
                    <li>
                        <div className='flex justify-center items-center text-md font-poppins border-b-[2px] border-t-[2px]  py-2' onClick={mobileResponsiveNavOption}>
                            <a href="#home">Home</a>
                        </div>
                    </li>
                    <li>
                        <div className='flex justify-center items-center text-md font-poppins border-b-[2px] py-2' onClick={mobileResponsiveNavOption}>
                            <a href="#about">About</a>
                        </div>
                    </li>
                    <li>
                        <div className='flex justify-center items-center text-md font-poppins border-b-[2px] py-2' onClick={mobileResponsiveNavOption}>
                            <a href="#episodes">Episodes</a>
                        </div>
                    </li>
                    <li>
                        <div className='flex justify-center items-center text-md font-poppins border-b-[2px] py-2' onClick={mobileResponsiveNavOption}>
                            <a href="#speakers">Speakers</a>
                        </div>
                    </li>
                    <li>
                        <div className='flex justify-center items-center text-md font-poppins border-b-[2px] py-2' onClick={mobileResponsiveNavOption}>
                            <a href="#contact">Contact</a>
                        </div>
                    </li>
                </ul>
            </aside>

            <div className='relative w-full h-5/6 flex flex-col justify-center sm:absolute sm:right-0 sm:w-3/5 sm:items-center'>
                <div className='font-inter uppercase font-normal ml-6'>
                    <span className='text-white text-8xl'>Pass</span> <br />
                    <span className='text-white inline-block rotate-90 origin-top text-4xl'>the</span><span className='text-pink-500 text-8xl'>Mic</span>
                </div>
                <div className='ml-6 text-neutral-300 text-5xl border-2 border-neutral-400 w-fit rounded-lg pt-3 pb-3 pl-5 pr-5 mt-4 sm:pl-8 sm:pr-8 sm:tracking-wider flex flex-col items-center'>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-center '>
                            <span className='text-[30px] md:text-[50px]' id='days'>{days}</span>
                            {days > 1 ? <span className='text-[15px] md:text-[20px] pt-1'>Days</span> : <span className='text-[15px] md:text-[20px] pt-1'>Day</span>}
                        </div>
                        <span className='mx-2 md:text-[50px] px-1'>:</span>
                        <div className='flex flex-col items-center'>
                            <span className='text-[30px] md:text-[50px]' id='hours'>{hours}</span>
                            {hours > 1 ? <span className='text-[15px] md:text-[20px] pt-1'>Hours</span> : <span className='text-[15px] md:text-[20px] pt-1'>Hour</span>}
                        </div>
                        <span className='mx-2 md:text-[50px] px-1'>:</span>
                        <div className='flex flex-col items-center'>
                            <span className='text-[30px] md:text-[50px]' id='minutes'>{minutes}</span>
                            {minutes > 1 ? <span className='text-[15px] md:text-[20px] pt-1'>Minutes</span> : <span className='text-[15px] md:text-[20px] pt-1'>Minute</span>}
                        </div>
                        <span className='mx-2 md:text-[50px] px-1'>:</span>
                        <div className='flex flex-col items-center'>
                            <span className='text-[30px] md:text-[50px]' id='seconds'>{seconds}</span>
                            {seconds > 1 ? <span className='text-[15px] md:text-[20px] pt-1'>Seconds</span> : <span className='text-[15px] md:text-[20px] pt-1'>Second</span>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
