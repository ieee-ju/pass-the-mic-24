import React from 'react'
//importing details container script
import episodeDetails from '../assets/detailsConstant'
//importing like icons
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Episode() {
  //like button js
  const likeButton = () => {
    const like1 = document.getElementById("openHeart")
    const like2 = document.getElementById("closedHeart")
    if (like2.classList.contains("hidden")) {
      like1.classList.remove("hidden")
      like1.classList.replace("text-5xl", "text-3xl")
      like2.classList.replace("text-3xl", "text-5xl")
      like2.classList.add("hidden")
      return 
    }
    if(like1.classList.contains("hidden")) {
      like2.classList.remove("hidden")
      like2.classList.replace("text-5xl", "text-3xl")
      like1.classList.replace("text-3xl", "text-5xl")
      like1.classList.add("hidden")
      return 
    }
  }

  return (
    <div id='episodes' className='container position: relative h-auto w-screen bg-neutral-900 flex flex-col items-center sm:max-w-full'>
      <div id='header' className='container position: relative w-screen h-auto flex justify-center pt-4'>
        <div className='position: relative w-fit h-full font-inter text-slate-50 font-medium uppercase text-6xl'>
          <h1>Episodes</h1>
          <div id='borderDivision' className='position: relative w-3/4 h-1 bg-slate-400 mt-3'></div>
        </div>
      </div>
      <div id='details' className='container position: relative w-screen h-auto mt-14 pb-4 flex flex-col items-center'>
        <div className='container position: relative h-auto w-auto border-4 border-slate-50 flex flex-col items-center pt-0 pb-8 sm:flex-row sm:pb-0'>
          {
            episodeDetails.episodeDetails.map(value => {
              return (
                <>
                  {/* header division */}
                  <div className='position: relative h-auto w-full -top-1 -left-1 sm:absolute sm:-left-0'>
                    <div className='w-fit h-auto bg-orange-900 text-slate-50 font-inter uppercase font-medium text-3xl border-b-2 border-r-2 border-slate-50  sm:absolute sm:-right-1 sm:border-r-0 sm:border-l-2'>
                      <h1 className='pl-4 pr-4 pt-1 pb-1'>Episode {value.eventNo}</h1>
                    </div>
                  </div>

                  {/* image division */}
                  <div id='imageDivision' className='w-64 aspect-square bg-zinc-300 mt-2 mr-2 ml-2 sm:min-w-64 sm:mb-2'>
                    {/* place the image here */}
                    {/* <img src={value.image} alt="image" /> */}
                  </div>

                  {/* content division */}
                  <div id='containerDivision' className='container w-64 mt-4 h-auto font-inter text-slate-100 sm:h-64 sm:w-auto  sm:ml-12'>
                    <div id='title' className='position: relative w-full h-auto flex justify-center font-semibold text-3xl text-center sm:justify-start'>{value.title}</div>
                    <div id='reference' className='position: relative w-full h-auto italic mt-2'>{value.reference}</div>
                    <div id='content1' className='position: relative w-full h-auto mt-4 font-medium'>{value.details1}</div>
                    <div id='content2' className='position: relative w-full h-auto mt-2 font-medium'>{value.details2}</div>
                    <div className='position: relative w-full h-auto flex items-center'>
                      <button className='bg-zinc-300 rounded-lg text-neutral-900 mt-4 w-3/4 pt-2 pb-2 pl-2 font-semibold text-left text-2xl cursor-pointer sm:w-60 sm:mt-2 active:scale-95'>Listen On</button>
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