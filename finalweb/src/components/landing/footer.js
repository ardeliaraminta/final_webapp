import React from 'react'
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import FormPage from './form';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

export default function Footer() {
  return (
    <>
   <div name='about' className='w-full my-32'>
    <div className='max-w-[1000px] max-h-[500px] mx-auto'>
        <div className='text-center'>
            <h3 className='text-light font-bold'>Location : Jl. Bulan Purnama no 11 </h3>
            <h3 className='text-light font-bold'>Hours: 11:00am - 23:59pm</h3>
            <h3 className='text-light font-bold'>Contact  : (+62) 812 3086 1757</h3>
            <p className='text-3xl py-6 text-gray-500'></p>
        </div>
        </div>


<div name='about' className='w-full my-32'>
    <div className='max-w-[1000px] max-h-[500px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Our Social Media</h2>
            <p className='text-3xl py-6 text-gray-500'></p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
        <a href="https://www.linkedin.com/in/monique-senjaya-06a33115a/"><div className='border py-8 rounded-xl shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[160px] h-[200px] md:w-[176px] md:h-[198px]" src={ig}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>IG : Moonbucks</p>
            </div></a>
            <a href="https://github.com/moniquesenjaya/piggybanc"><div  className='border py-8 rounded-xl shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[160px] h-[220px] md:w-[176px] md:h-[198px]" src={fb}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>FB : Moonbucks</p>
            </div></a>
            <a href='https://www.linkedin.com/in/ardelia-araminta-b19358201/'><div className='border py-8 rounded-xl shadow-xl' >
           <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[176px] md:h-[198px]" src={twitter}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>Twitter: Moonbucks</p>
            </div></a>
        </div>
    </div>
</div>
        
 
    <footer class="h-10">Copyright © 2022 MoonBucks Association</footer>
  </div>
  </>
  
     )
}