import React, { useEffect, useState } from 'react'
import { Carousel,IconButton} from "@material-tailwind/react"; 
import {ChevronLeft} from 'react-feather'
import { ChevronRight } from 'react-feather';

function HomeSlider({children:slider,autoSlide=false,autoSliderInterval=3000}) {
    const[curr,setCurr]=useState(0);
    
    const next=()=>setCurr((curr) => (curr==slider.length-1 ? 0:curr+1));
    const prev=()=>setCurr((curr) => (curr==0 ? slider.length-1:curr-1));
    console.log("enter next btn",next);
    console.log("enter prev btn",prev);

    useEffect(()=>{
        if(!autoSlide)return 
        const slideInterval=setInterval(next,autoSliderInterval)
        return()=>clearInterval(slideInterval)
    })

  return ( 
    <div> 
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-700'  style={{ transform:`translateX(-${curr*100}%)`}}>
            {slider}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-3 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white'>
                <ChevronLeft size={40}/>
            </button>
            <button onClick={next} className='p-3 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white'>
                <ChevronRight size={40}/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
            {/* {slider.map((_,i)=>(
                <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr ==i ?"p-4":"bg-opacity-50"}`}/>
            ))} */}
            </div>
        </div>
    </div>
    </div>
  );
}

export default HomeSlider