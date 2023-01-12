import React from 'react'
import graphicDesign from '../assets/desktop/image-graphic-design.jpg'
import photography from '../assets/desktop/image-photography.jpg'
import emily from '../assets/image-emily.jpg'
import jennie from '../assets/image-jennie.jpg'
import thomas from '../assets/image-thomas.jpg'
const Testimonials = () => {

    const testimonials = [
        { name: 'Emily R.', position: "Marketing Director", image: emily, message: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were hit.' },
        { name: 'Thomas S.', position: "Chief Operating Officer", image: thomas, message: "'Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." },
        { name: 'Jennie F.', position: "Business Owner", image: jennie, message: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" },
    ]

    return (
        <div className='p-10 md:h-[60%] flex flex-col w-full justify-center items-center gap-5'>
            <h2 className='text-center uppercase font-fraunces text-gray-500 tracking-[10px] mb-10'>Client Testimonials</h2>
            <div className='flex flex-col md:flex-row gap-16   '>
                {testimonials.map((testimonial,i) => (
                    <div className='flex flex-col text-center items-center justify-center gap-8' key={i}>
                        <img src={testimonial.image} alt="" className='rounded-full w-16' />
                        <p className='text-gray-500 font-normal px-[50px] '>{testimonial.message}</p>
                        <div>
                            <h3 className='font-fraunces'>{testimonial.name}</h3>
                            <span className='text-gray-300 text-sm'>{testimonial.position}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Testimonials