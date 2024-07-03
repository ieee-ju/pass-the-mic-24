import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import background from '../assets/background.png';
import { GiHamburgerMenu } from "react-icons/gi";



function Landing() {

    const date = "12 July 2024 11:00 PM" 

    
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);


    const mobileResponsiveNavOption = () => {
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

        setDays(days < 10 ? `0${days}` : `${days}`);
        setHours(hours < 10 ? `0${hours}` : `${hours}`);
        setMinutes(minutes < 10 ? `0${minutes}` : `${minutes}`);
        setSeconds(seconds < 10 ? `0${seconds}` : `${seconds}`);
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


            <nav className='relative w-full h-1/6 flex items-center'>
                <img src={logo} alt="logo" className='relative h-2/4 ml-8' />
                <GiHamburgerMenu id='hamburger' className='absolute right-0 mr-6 text-3xl text-neutral-400 transition-all duration-200 sm:hidden' onClick={mobileResponsiveNavOption} />
                <ul className='absolute right-0 flex h-full items-center text-neutral-300 mr-8 font-poppins hidden sm:flex'>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#home") }} className='uppercase'>Home</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#about") }} className='uppercase'>About</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#episodes") }} className='uppercase'>Episodes</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#speakers") }} className='uppercase'>Speakers</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#contact") }} className='uppercase'>Contact</button></li>
                </ul>
            </nav>

            <aside id='sideBar' className='absolute mt-1/6 h-5/6 w-3/5 -right-full bg-gradient-to-b from-pink-900 to-pink-500 z-10 transition-all duration-200 ease-in-out sm:hidden'>
                <ul className='text-neutral-300 uppercase'>
                    <li>
                        <div className='h-16 flex justify-center items-center text-3xl font-poppins border-b-2'><a href="#home">Home</a></div>
                    </li>
                    <li>
                        <div className='h-16 flex justify-center items-center text-3xl font-poppins border-b-2'><a href="#about">About</a></div>
                    </li>
                    <li>
                        <div className='h-16 flex justify-center items-center text-3xl font-poppins border-b-2'><a href="#episodes">Episodes</a></div>
                    </li>
                    <li>
                        <div className='h-16 flex justify-center items-center text-3xl font-poppins border-b-2'><a href="#speakers">Speakers</a></div>
                    </li>
                    <li>
                        <div className='h-16 flex justify-center items-center text-3xl font-poppins border-b-2'><a href="#contact">Contact</a></div>
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
