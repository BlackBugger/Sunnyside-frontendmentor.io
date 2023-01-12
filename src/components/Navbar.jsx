import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import './navbar.css'
const g = () => {
  const [darkMode, setDarkmode] = useState(true);

  const navToggle = (e) => {
    const nav = document.querySelector('ul');

    document.onclick = (e) => {
      if (e.target.id !== 'navMenuBtn' && e.target.id !== 'navMenu') {
        nav.classList.remove('active')
      }
    }
    nav.classList.toggle('active')
  }



  return (
    <>
      <div className='z-20 absolute w-full py-2 px-7 sm:p-7 sm:px-10 m-0 flex items-center sm:justify-between justify-center text-sm text-gray-50 '>
        <a href="#home"><img src={logo} alt=""  className='mr-auto cursor-pointer h-[30px] w-[150px] sm:w-full sm:h-[40px]' /></a>

        <div className='p-10 text-gray-500 z-20 w-[90%]  sm:bg-inherit  sm:p-0 sm:relative flex flex-col gap-10 sm:flex-row items-center justify-center sm:justify-end'>
          <ul id='navMenu' className='navbar flex flex-col sm:text-lg sm:gap-16 md:text-white text-gray-500 sm:flex-row items-center'>
            <li className='cursor-pointer'><a href="#about">About</a></li>
            <li className='cursor-pointer'><a href="#services">Services</a></li>
            <li className='cursor-pointer'><a href="#projects">Projects</a></li>
            <button className='sm:text-lg text-gray-500 sm:text-gray-700
            border p-2 px-7 rounded-3xl border-none bg-yellow-300 
            sm:bg-white font-fraunces font-medium text-xs 
            hover:bg-sky-300 hover:text-white transition-all duration-300'>CONTACT</button>

          </ul>


        </div>
        <button className='sm:hidden' onClick={() => navToggle()}><AiOutlineMenu size={30} color="white" id='navMenuBtn' /></button>
      </div>


    </>

  )
}

export default g