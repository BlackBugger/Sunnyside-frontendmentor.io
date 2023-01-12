import React from 'react'
import transform from '../assets/desktop/image-transform.jpg'
import strawberry from '../assets/desktop/image-stand-out.jpg'
const About = () => {
    return (
        <>
            <section>
                <div className=' flex flex-col-reverse md:flex-row w-full justify-center items-center '>
                    <div className=' flex justify-center items-center w-full h-full p-10 gap-5 md:w-2/4'>
                        <div className='flex flex-col gap-7 items-center text-center md:text-start md:items-start  w-full  md:w-full '>
                            <h2 className='font-fraunces md:text-4xl'>Transform your Brand</h2>
                            <p className='text-gray-500'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
                                through compelling visuals that do most of the marketing for you</p>
                            <button className='font-fraunces'>LEARN MORE</button>
                        </div>
                    </div>
                    <div className='w-full  md:w-2/4'>
                        <img src={transform} alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col md:flex-row w-full justify-center items-center '>
                    <div className='w-full  md:w-2/4'>
                        <img src={strawberry} alt="" className='w-full h-full' />
                    </div>
                    <div className='flex justify-center items-center w-full h-full p-10 gap-5 md:w-2/4'>
                        <div className='flex flex-col gap-7 items-center text-center md:text-start md:items-start  w-full'>
                            <h2 className='font-fraunces text-3xl'>Stand out to the right audience</h2>
                            <p className='text-gray-500'>Using a collaborative formula of designers, researchers, photographers, videographers,
                                and copywriters, we'll build and extend your brand in digital places</p>
                            <button className='font-fraunces'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About