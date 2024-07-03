import React, { useEffect } from 'react'
import { useWindowSize } from "@uidotdev/usehooks"
//importing details container script
import episodeDetails from '../assets/detailsConstant'
//importing react icons
import { HiDotsHorizontal } from "react-icons/hi";


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
    <div id='episodes' className='container position: relative h-auto w-screen bg-neutral-900 flex flex-col items-center sm:max-w-full overflow-hidden'>
      <div id='header' className='container position: relative w-screen h-auto flex justify-center pt-4'>
        <div className='position: relative w-fit h-full font-inter text-slate-50 font-medium uppercase text-6xl'>
          <h1>Episodes</h1>
          <div id='borderDivision' className='position: relative w-3/4 h-1 bg-slate-400 mt-3'></div>
        </div>
      </div>
      <div id='details' className='container position: relative w-full h-auto mt-14 pb-4 flex flex-col items-center'>
        <div className='container position: relative overflow-hidden h-auto w-auto sm:w-11/12 border-4 border-slate-50 flex flex-col items-center pt-0 pb-8 sm:flex-row sm:pb-0'>
          {
            episodeDetails.episodeDetails.map(value => {
              return (
                <>
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
                      <div id='content1' className='position: relative w-full h-auto mt-4 font-medium'>{limitText(value.details1)} <button className='position: relative' onClick={()=>{return revealText(value.details1,"content1")}}><HiDotsHorizontal /></button></div>
                      <div id='content2' className='position: relative w-full h-auto mt-2 font-medium'>{limitText(value.details2)} <button className='position: relative' onClick={()=>{return revealText(value.details1,"content2")}}><HiDotsHorizontal /></button></div>
                    </div>

                    {/* button link division */}
                    <div className='position: relative sm:h-1/4 sm:ml-12 sm:mb-4'>
                      <button className='bg-zinc-300 rounded-lg text-neutral-900 mt-4 w-3/4 pt-2 pb-2 pl-2 font-semibold text-left text-2xl cursor-pointer sm:w-60 sm:mt-2 active:scale-95 hover:scale-105 transition-all duration-100' onClick={() => { return buttonFunction(value.spotifyLink) }}>Listen On</button>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Episode