import React from 'react'
import Button from './Button'

const Newsletter = () => {
  return (
    <section className='p-9'>
      <div className='p-4 bg-primaryIntroEmail rounded-sm'>
      <h5 className='text-white font-raleway font-fontWeight700 text-lg text-center mt-8'>Get early access today</h5>
      <p className='text-white font-openSans font-fontWeight400 text-fontSize text-center mt-6'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
questions, our support team would be happy to help you.</p>
<form className='flex flex-col justify-center mt-6'>
  <input type="email" placeholder='email@example.com' className='input p-3 rounded-3xl' />
  <Button className='get-started-free-btn'>Get Started For Free</Button>
</form>
      </div>
    </section>
  )
}

export default Newsletter
