import React from 'react'
import { testimonials } from '../constants'
import { bgQuotes } from '../assets'

const Testimonials = () => {
  return (
    <section className='p-9 mt-6'>
      <div className='flex xs:flex-col lg:flex-row lg:gap-5 justify-center items-center'>
        <img src={bgQuotes} alt="quotes" className='w[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mb-10'/>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='flex flex-col text-left mt-8 p-6 bg-testimonialsBg rounded-md'>
            <p className='text-white text-sm lg:max-w-[20rem]'>{testimonial.feedback}</p>
            <div className='flex justify-start gap-2 mt-4'>
              <img src={testimonial.icon} alt="person" className='rounded-full' width={35} height={20}/>
              <article className='text-white'>
                <h4 className='font-fontWeight700 text-[12px]'>{testimonial.name}</h4>
                <p className='text-[12px]'>{testimonial.title}</p>
              </article>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Testimonials
