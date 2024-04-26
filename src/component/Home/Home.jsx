import React from 'react';
// import {Link,NavLink}from 'react-router-dom';
import './Home.css' ;
import Content from './Content';
import HomeSlider from './HomeSlider';
import { Carousel } from '@material-tailwind/react';


const slider=[
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",

]
export default function Home() {

  return (
    <>
    <div className='w-full flex justify-center '>
    <div className='max-w-4xl flex'>
    <HomeSlider autoSlide={true} autoSlideInterval={1000}>
      {slider.map((s)=>(
        <img src={s} />
      ))}
      </HomeSlider>
    </div>
    </div>
    <HomeSlider></HomeSlider>
    <Content></Content>
    </>
  )
}
