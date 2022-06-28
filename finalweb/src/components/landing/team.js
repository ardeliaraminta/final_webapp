import React from 'react'
import ess from '../../assets/ess.png';
import mac from '../../assets/mac.png';
import matchaa from '../../assets/matchaa.png';
// to do list : make it mobile friendly 

export default function Team() {
  return (
    <div name='about' className='w-full my-32'>
    <div className='max-w-[1000px] max-h-[500px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Other Menus</h2>
            <p className='text-3xl py-6 text-gray-500'></p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
        <a href="#"><div className='border py-8 rounded-xl shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[100px] h-[200px] md:w-[100px] md:h-[198px]" src={mac}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-white mt-2'>Caramel Machiatto</p>
                <p className='text-white mt-2'>$5.50</p>
            </div></a>
            <a href="#"><div  className='border py-8 rounded-xl shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[160px] h-[220px] md:w-[140px] md:h-[200px]" src={ess}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-white mt-2'>Espresso</p>
                <p className='text-white mt-2'>$3.50</p>
            </div></a>
            <a href='#/'><div className='border py-8 rounded-xl shadow-xl' >
           <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[90px] md:h-[198px]" src={matchaa}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-white mt-2'> Venti Whipped Matcha Espresso</p>
                <p className='text-white mt-2'>$6.50</p>
            </div></a>
            
        </div>
    </div>
</div>
)
  };
