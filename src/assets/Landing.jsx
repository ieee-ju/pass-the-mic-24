import React, { useEffect, useState } from 'react'
//importing images
import logo from '../../public/logo.png'
import background from '../../public/background.png'
//importing icon
import { GiHamburgerMenu } from "react-icons/gi";

//Important!! for each component set an id respective to th section for the outermost div

function Landing() {

    //time set
    const date = "25 June 2024 11:00 PM" // format - date month year time(00:00) AM/PM

    //DOM elements
    const [hours,setHours] = useState(null)
    const [minutes,setMinutes] = useState(null)
    const [seconds, setSeconds] = useState(null)

    //functions

    //mobile responsive navbar function
    const mobileResponsiveNavOption = () => {
        const sidebar = document.getElementById("sideBar")
        const hamburger = document.getElementById("hamburger")

        if (sidebar.classList.contains("right-0")) {
            sidebar.classList.remove("right-0")
            sidebar.classList.add("-right-full")
            hamburger.classList.remove("rotate-180")
        } else {
            sidebar.classList.remove("-right-full")
            sidebar.classList.add("right-0")
            hamburger.classList.add("rotate-180")
        }
    }

    //button as section link function
    const navButtonLinkUtility = (location) => {
        window.location.href = location
    }

    //timer function
    const timerFunction = () => {
        const end = new Date(date)
        const now = new Date()
        const timeLeft = (end - now) / 1000

        //convert into hours  
        const hours = Math.floor(timeLeft / 3600)
        const minutes = (Math.floor(timeLeft / 60) % 60)
        const seconds = (Math.floor(timeLeft % 60))
        setHours(hours < 10 ? `0${hours}` : `${hours}`)
        setMinutes(minutes < 10 ? `0${minutes}` : `${minutes}`)
        setSeconds(seconds < 10 ? `0${seconds}` : `${seconds}`)

        return
    }

    //effect
    useEffect(() => {
        const interval = setInterval(timerFunction, 1000)
        return () => clearInterval(interval)
    },[window.onloadstart])


    return (
        <div id='home' className='position: relative overflow-x-hidden w-screen h-screen sm:max-w-full'>

            {/* background */}
            <div className='container position: absolute w-full h-full sm:max-w-full'>
                <img src={background} alt="baclground" className='position: relative h-full object-cover object-left sm:w-full sm:object-top' />
            </div>

            {/* navbar */}
            <nav className='position: relative w-full h-1/6 flex items-center'>
                <img src={logo} alt="logo" className='position: relative h-2/4 ml-8' />
                <GiHamburgerMenu id='hamburger' className='position: absolute right-0 mr-6 text-3xl text-neutral-400 transition-all duration-200 sm:hidden' onClick={mobileResponsiveNavOption} />
                <ul className='position: absolute right-0 flex h-full items-center text-neutral-300 mr-8 font-poppins invisible sm:visible'>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#home") }}>Home</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#about") }}>About</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#episodes") }}>Episodes</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#speakers") }}>Speakers</button></li>
                    <li className='ml-5 border-2 rounded-full pt-1 pb-1 pl-6 pr-6 border-neutral-500 hover:bg-gradient-to-b from-pink-950 to-pink-500'><button onClick={e => { return navButtonLinkUtility("#contact") }}>Contact</button></li>
                </ul>
            </nav>

            {/* mobile responsive sidebar */}
            <aside id='sideBar' className='position: absolute mt-1/6 h-5/6 w-3/5 -right-full bg-gradient-to-b from-pink-900 to-pink-500 z-10 transition-all duration-200 ease-in-out sm:hidden'>
                <ul className='text-neutral-300'>
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

            {/* timer */}
            <div className='position: relative w-full h-5/6 flex flex-col justify-center sm:absolute sm:right-0 sm:w-3/5 sm:items-center'>
                <div className='font-inter uppercase font-normal ml-6'>
                    <span className='text-white text-8xl'>Pass</span> <br />
                    <span className='text-white inline-block rotate-90 origin-top text-4xl'>the</span><span className='text-pink-500 text-8xl'>Mic</span>
                </div>
                <div className='ml-6 text-neutral-300 text-5xl border-2 border-neutral-400 w-fit rounded-lg pt-3 pb-3 pl-5 pr-5 mt-4 sm:pl-8 sm:pr-8 sm:tracking-wider'>
                    <span id='hours'>{hours}</span> : <span id='minutes'>{minutes}</span> : <span id='seconds'>{seconds}</span>
                </div>
            </div>
        </div>
    )
}

export default Landing
