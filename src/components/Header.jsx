import React from 'react'
import homeBackground from '../assets/desktop/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'
import {delay, motion} from 'framer-motion'
const Header = () => {

const bounceArrow ={
    y: {
        duration: 2,
        repeat: Infinity,
        type:'spring',
        repeatType:"reverse",
        ease: "easeInOut",
        repeatDelay: 1
    }
    
}

    return (
        <div className='relative z-0 h-[90%] w-screen '>
            <div className='h-full w-full bg-orange bg-center bg-cover bg-fixed'/>
            <section className='text-center flex flex-col justify-center items-center absolute top-40  w-screen text-white mx-auto '>
                <h1 className=' font-fraunces text-5xl md:text-7xl uppercase tracking-[5px] mb-[100px]'>We are creatives</h1>
                <motion.img transition={bounceArrow} 
                animate={{
                    y:["30%","-30%","30%"]
                    
                }}
                src={arrowDown} alt="" className='text-center ' />
            </section>
        </div>
    )
}

export default Header