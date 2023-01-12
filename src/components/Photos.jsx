import React from 'react'
import milkbottle from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugarcube from '../assets/desktop/image-gallery-sugarcubes.jpg'


const Photos = () => {
    return (
        <div className='h-full w-screen m-0 grid grid-cols-2 md:grid-cols-4 aspect-square'>
            <img src={milkbottle} alt="" className='w-full h-full aspect-square' />
            <img src={orange} alt="" className='w-full h-full aspect-square' />
            <img src={cone} alt="" className='w-full h-full aspect-square' />
            <img src={sugarcube} alt="" className='w-full h-full aspect-square' />
        </div>
    )
}

export default Photos