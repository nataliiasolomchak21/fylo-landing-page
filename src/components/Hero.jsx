import React from 'react'
import { illustrationIntro } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section className='p-9 mt-3'>
      <div className='flex flex-col justify-center items-center text-center'>
        <img src={illustrationIntro} alt="illustration" className='w-[300px] h-[260px] lg:w-[700px] lg:h-[500px]'/>
        <h1 className='text-white text-2xl lg:text-3xl font-raleway font-fontWeight700 mt-9 max-w-70'>All your files in one secure location, <br />accessible anywhere.</h1>
        <p className='text-white text-fontSize font-openSans font-fontWeight400 mt-4 max-w-80 lg:max-w-[32rem]'>Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends, family, and co-workers.</p>
        <Button className="get-started-btn lg:mt-5">Get Started</Button>
      </div>
    </section>
  )
}

export default Hero
