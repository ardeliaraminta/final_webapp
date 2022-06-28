import React from 'react'
import unicorn from '../../assets/unicorn.png';
import candycane from '../../assets/candycane.png';
import matcha from '../../assets/matcha.png';


export default function Why() {
  return (
    <div name='support' className='w-full mt-24'>
    <div className='w-full h-[800px] bg-gray absolute'>
    </div>
    
    <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
            <h3 className='font-Inter text-white text-[20px] md:text-[75px] font-[700] text-5xl text-5xl font-bold py-6 text-center'>Our Speciality</h3>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 pt-12 sm:pt-10 text-white'>
            <div className='bg-[#000000] rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[400px] md:w-[200px] md:h-[380px]" src={unicorn}></img>
                    <div className='pl-2 font-bold font-Inter text-[#FFFFFF] text-[20px] md:text-[24px] font-[700]'>Pink Drikitty Strawberry</div>
                </div>
            </div>
            <div className='bg-[#000000] rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex" src={candycane}></img>
                    <div className='pl-2 font-bold font-Inter text-[#FFFFFF] text-[20px] md:text-[24px] font-[700]'>Candy Cane Macchiatto</div>
                </div>
            </div>
            <div className='bg-[#000000] rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[300px] md:w-[200px] md:h-[380px]" src={matcha}></img>
                    <div className='pl-2 font-bold font-Inter text-[#FFFFFF] text-[20px] md:text-[24px] font-[700]'>Matcha with Ice Cream</div>
                </div>
            </div>
    
            </div>
        </div>
</div>
  )
}