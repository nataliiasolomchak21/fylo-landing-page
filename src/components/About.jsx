import React from 'react';
import { illustrationProductive, iconArrow } from '../assets';

const About = () => {
  return (
    <section className='p-9 mt-6 lg:mt-7'>
      <div className='flex xs:flex-col lg:flex-row justify-center items-center'>
        <img 
          src={illustrationProductive} 
          alt="productive people" 
          className='w-[300px] h-[280px] lg:w-[650px] lg:h-[500px] lg:mr-9' // Add right margin for lg screens
        />
        <div>
          <h3 className='text-white font-raleway font-fontWeight700 text-lg lg:text-[2.2rem] text-center lg:text-left mt-8 lg:max-w-[20rem] lg:leading-snug'>
            Stay productive, wherever you are
          </h3>
          <p className='text-white font-openSans font-fontWeight400 text-fontSize mt-4 lg:max-w-[37rem]'>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </p>
          <p className='text-white font-openSans font-fontWeight400 text-fontSize mt-4 lg:max-w-[37rem]'>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
          <a 
            href="#" 
            className='text-sm text-callToActionCyan font-fontWeight400 inline-flex gap-1 mt-4 hover:text-white'
          >
            See how Fylo works 
            <img src={iconArrow} alt="arrow icon" width={20} height={20} className='hover:text-white' />
          </a>
          <hr className='text-callToActionCyan mt-2' width={140} />
        </div>
      </div>
    </section>
  );
}

export default About;
