import React from 'react'
import { illustrationIntro } from '../assets'

const Hero = () => {
  return (
    <section className='p-9'>
      <div className='flex flex-col justify-center items-center text-center'>
        <img src={illustrationIntro} alt="illustration" width={300} height={300}/>
        <h1 className='text-white text-2xl font-raleway font-fontWeight700 mt-9 max-w-70'>All your files in one secure location, accessible anywhere.</h1>
        <p className='text-white text-fontSize font-openSans font-fontWeight400 mt-4 max-w-80'>Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends, family, and co-workers.</p>
        <button className='get-started-btn text-white font-raleway font-fontWeight700 text-sm bg-gradient-to-br from-callToActionCyan to-callToActionBlue mt-6 p-3 rounded-3xl'>Get Started</button>
      </div>
    </section>
  )
}

export default Hero
