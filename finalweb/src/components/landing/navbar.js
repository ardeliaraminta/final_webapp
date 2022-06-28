import React, {Component} from 'react';
import mascot from '../../assets/mascot.png';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <>
    <nav className={`transition-all duration-700 ${open ? "bg-transparent" : "bg-black"}`}>
    <div className='flex justify-between w-[100%]'>
      {/* logo */}
      <a href="">
      <div className='flex items-center ml-10 mt-5'>
        <img className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" src={mascot}/>
        <div className='font-light text-white text-[20px] md:text-[26px] font-[700]'>Moonbucks</div>
      </div>
      </a>

      {/* hamburger */}
      <a className="text-white flex items-center p-[1px] md:hidden mr-10 mt-5">
        {open ? <MenuIcon onClick={handleClick} /> : <CloseIcon onClick={handleClick} />}
      </a>

      {/* navbar */}
      <div className={`flex items-center flex-col md:flex-row bg-black md:bg-transparent md:static absolute md:z-auto z-[1]  left-0 w-full md:w-auto transition-all duration-700 ease-in ${!open ? 'top-[60px] opacity-100' : 'top-[-490px] md:opacity-100 opacity-0 z-[-1]'}`}>
        <a className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Order Online Now !</a>
        <a className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Promotions</a>
        <a className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>About us</a>
        <a className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Menu</a>
        <a className='px-5 font-[600] text-[15px] sm:text-[20px] hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1'>Find A Store</a>
        <Link to="/login"><div className='px-5 hover:scale-10 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1 pb-3 '><Button variant="contained" classname="text-[13px] sm:text-[20px]" size="small" sx={{paddingX:3, fontFamily:'Inter', color:'#000', fontWeight:600, background: 'linear-gradient(45deg,  #363636 20%, #FFFAFA 90%)'}}>Join us</Button></div></Link>
      </div>
    </div>
    </nav>
    </>
  );
}

export default Navbar;