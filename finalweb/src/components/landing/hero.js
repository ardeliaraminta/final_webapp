import React from 'react'
import special from '../../assets/special.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <>


{/* main title
    <div className='flex items-start flex-col ml-20 mt-20'>
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Your Personalized </a>
    <img className="w-[200px] h-[250px] md:w-[600px] md:h-[697]" src={mascot}/> 
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Finance Tracking</a>
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Application </a>

  </div> */}
<div class="flex items-start ml-20 mt-20">
    <div class="flex items-center justify-between h-30">
        <div class="flex flex-col px-4">
        <div class="border-dashed border-2 border-white text-[30px]"> Special Offer : Bring your own tumbler and get 50% off on your drink ! </div>
            <a class="font-Inter font-light text-white text-[22px] md:text-[75px] font-[700]">Check Out Our Special Menu !</a>
            <p class="mt-10 break-normal tracking-normal font-Inter font-light text-white text-[30px] md:text-[40px] font-[700]"> Head in the Clouds</p>
            <p class="mt-10 break-normal tracking-normal font-Inter font-light text-white text-[30px] md:text-[20px] font-[700]"> Head in the Clouds Macchiato, which can be served both hot and iced, features whipped cold milk foam that has a light, fluffy, and silky-smooth! </p>
            
      </div>
    </div>

      
    
        <img class="w-[200px] h-[230px] md:w-[680px] md:h-[697px]" src={special}></img>
    </div>








</>
  )
}

