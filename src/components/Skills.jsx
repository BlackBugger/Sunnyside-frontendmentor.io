import React from 'react'
import graphicDesign from '../assets/desktop/image-graphic-design.jpg'
import photography from '../assets/desktop/image-photography.jpg'

const Skills = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center '>
            <div className='relative w-full  md:w-2/4'>
                <img src={graphicDesign} alt="" className='w-full h-full' />
                <div className='text-[rgba(34,68,61,0.8)] gap-5 absolute w-full bottom-0 flex flex-col justify-center items-center text-center m-auto '>
                    <h3 className='font-fraunces text-xl font-bold lg:text-3xl'>Graphic Design</h3>
                    <span className='w-3/6 mb-10 md:mb-10 lg:mb-22 xl:mb-32 text-xs lg:text-base'>Great Design makes you memorable,
                        We deliver artwork that underscores
                        your brand message and captures potential clients' attention.
                    </span>
                </div>
            </div>
            <div className='relative w-full  md:w-2/4'>
                <img src={photography} alt="" className='w-full h-full' />
                <div className='text-[rgba(34,68,61,0.8)] gap-5 absolute w-full bottom-0 flex flex-col justify-center items-center text-center m-auto '>
                    <h3 className='font-fraunces text-xl font-bold lg:text-3xl'>Photography</h3>
                    <span className='w-3/6 mb-10 md:mb-10 lg:mb-22 xl:mb-32 text-xs lg:text-base'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills