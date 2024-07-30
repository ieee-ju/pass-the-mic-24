import React, { useEffect } from 'react'
import { useWindowSize } from "@uidotdev/usehooks"
//importing details container script
import episodeDetails from '../assets/Episodes'
//importing react icons
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSpotify } from "react-icons/fa";
import { AiOutlineForm } from 'react-icons/ai';


function Episode() {
  //window size variable
  let size = useWindowSize()
  //like button js redirection
  const buttonFunction = (link) => {
    window.location.href = link
    return
  }

  //overlapping script
  const overlap = () =>{
    const title = document.getElementById("title")
    const header = document.getElementById("headerLocationAssist")
    let positionTitleX = title.getBoundingClientRect().x
    let positionHeaderX = header.getBoundingClientRect().x
    if((positionHeaderX-positionTitleX)<410){
      title.classList.add("mt-14")
    }else{
      if(title.classList.contains("mt-14")){
        title.classList.remove("mt-14")
      }
    }
    return 
  }

  //text limiter
  const limitText = (text) =>{
    const content = text.slice(0,240)   
    return content 
  }
  //text reveal function
  const revealText = (text,elementID) =>{
    const element = document.getElementById(elementID)
    element.innerHTML = text
    return 
  }
  useEffect(()=>{
    const resizeEventHandeler=window.addEventListener("resize",()=>{
      overlap()
      return 
    })
    const loadEventHander = window.addEventListener("load",()=>{
      overlap()
      return 
    })

    return ()=>{
      window.removeEventListener(resizeEventHandeler,()=>{
        return
      })
      window.removeEventListener(loadEventHander,()=>{
        return
      })
    }
  },[size])

  return (
    <section id='episodes' className='container position: relative h-auto w-screen bg-neutral-900 flex flex-col items-center sm:max-w-full overflow-hidden py-8'>
      <div id='header' className='container position: relative w-screen h-auto flex justify-center pt-4'>
        <div className='position: relative w-fit h-full font-inter text-slate-50 font-medium uppercase text-6xl'>
          <h1>Episodes</h1>
          <div id='borderDivision' className='position: relative w-3/4 h-1 bg-slate-400 mt-3'></div>
        </div>
      </div>
      {
            episodeDetails.episodeDetails.map(value => {
              return (
                <>
      <div id='details' className='container position: relative w-full h-auto mt-14 pb-4 flex flex-col items-center'>
        <div className='container position: relative overflow-hidden h-auto w-auto sm:w-11/12 border-4 border-slate-50 flex flex-col items-center pt-0 pb-8 sm:flex-row sm:pb-0'>
                  {/* header division */}
                  <div className='position: relative h-auto w-full -top-1 -left-1 sm:absolute sm:-left-0'>
                    <div id='headerLocationAssist' className='w-fit h-auto bg-orange-900 text-slate-50 font-inter uppercase font-medium text-3xl border-b-2 border-r-2 border-slate-50  sm:absolute sm:-right-1 sm:border-r-0 sm:border-l-2'>
                      <h1 className='pl-4 pr-4 pt-1 pb-1'>Episode {value.eventNo}</h1>
                    </div>
                  </div>

                  {/* image division */}
                  <div id='imageDivision' className='w-64 aspect-square bg-zinc-300 mt-2 mr-2 ml-2 sm:min-w-64 sm:mb-2'>
                    {/* place the image here */}
                    <img src={value.image} alt="image" />
                  </div>

                  {/* content and button container */}
                  <div>
                    {/* content division */}
                    <div id='containerDivision' className='container w-64 mt-4 h-auto font-inter text-slate-100 sm:h-3/4 sm:w-auto  sm:ml-12 overflow'>
                      <div id='title' className='position: relative w-full h-auto flex justify-center font-semibold text-3xl text-center sm:justify-start'>{value.title}</div>
                      <div id='reference' className='position: relative w-full h-auto italic mt-2'>{value.reference}</div>
                      <div id='time' className='position: relative w-64 h-auto bold mt-2 text-xl p-2 text-center rounded-md bg-red-900'>{value.time}</div>
                      <div id='content' className='position: relative w-full h-auto mt-4 font-medium text-wrap'>{limitText(value.details)} <button onClick={()=>{return revealText(value.details,"content")}}>...</button></div>
                      {/* <div id='content2' className='position: relative w-full h-auto mt-2 font-medium'>{limitText(value.details2)} <button onClick={()=>{return revealText(value.details2,"content2")}}>...</button></div> */}
                    </div>

                    <div className="flex flex-col sm:flex-row my-4 -sm:px-4 sm:ml-12 sm:mr-4 gap-4 sm:gap-8 -sm:justify-between">
                      <a href={value.spotifyLink} className='bg-slate-200 rounded-xl px-8 py-2 flex flex-row justify-between sm:gap-4'>
                        <p className='my-auto font-semibold'>Listen On</p>
                        <FaSpotify size={25} />
                      </a>
                      <a href={value.registerLink} className='bg-slate-200 rounded-xl px-8 py-2 flex flex-row justify-between sm:gap-4'>
                        <p className='my-auto font-semibold'>Register</p>
                        <AiOutlineForm size={25}/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                </>
              )
            })
          }

      <div className="text-center px-8 text-white font-semibold text-2xl my-4">
        Stay tuned for more episodes...
      </div>
    </section>
  )
}

export default Episode