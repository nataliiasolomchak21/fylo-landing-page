import React from 'react'
import { illustrationProductive, iconArrow } from '../assets'

const About = () => {
  return (
    <section className='p-9'>
      <div className='flex xs:flex-col lg:flex-row'>
      <img src={illustrationProductive} alt="productive people" className='mx-auto' width={300} height={300} />
      <article className=''>
        <h3 className='text-white font-raleway font-fontWeight700 text-lg text-center mt-8'>Stay productive, wherever you are</h3>
        <p className='text-white font-openSans font-fontWeight400 text-fontSize mt-4'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
storage needs.</p>
        <p className='text-white font-openSans font-fontWeight400 text-fontSize mt-4'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
attachments required.</p>
        <a href="#" className='text-sm text-callToActionCyan font-fontWeight400 inline-flex gap-1 mt-4'>See how Fylo works <img src={iconArrow} alt="arrow icon" width={20} height={20} /></a>
        <hr className='text-callToActionCyan mt-2' width={140} />
      </article>
      </div>
      </section>
  )
}

export default About
