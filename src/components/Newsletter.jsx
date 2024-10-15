import React, { useState } from 'react'
import Button from './Button'

const Newsletter = () => {
  const [email, setEmail] = useState('') // State for email input
  const [errorMessage, setErrorMessage] = useState('') // State for error message

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email
    if (!email) {
      setErrorMessage('Please enter a valid email address.'); // Empty email error
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.'); // Invalid email error
    } else {
      setErrorMessage(''); // Clear error if email is valid
      // Proceed with form submission or other logic
      console.log('Email submitted:', email);
      // Clear the email input after successful submission
      setEmail('');
    }
  };

  return (
    <section className='p-9'>
      <div className='p-6 mt-9 bg-primaryIntroEmail rounded-sm lg:max-w-[60rem] mx-auto'>
        <h5 className='text-white font-raleway font-fontWeight700 text-[2rem] text-center mt-8'>Get early access today</h5>
        <p className='text-white font-openSans font-fontWeight400 text-fontSize text-center mt-6'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        <div className="flex justify-center items-center mt-6"> {/* Center the form itself */}
          <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row justify-center items-center mb-8'>
            {/* Wrap the input and error message in a separate div */}
            <div className="relative flex flex-col"> {/* Changed to relative to position error absolutely */}
              <input
                type="email"
                placeholder='email@example.com'
                className='input p-4 rounded-3xl text-sm lg:mr-2 lg:mb-0'
                style={{ minWidth: '200px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Error message with absolute positioning */}
              {errorMessage && (
                <p className="text-error ml-6 mt-[3rem] absolute">{errorMessage}</p>
              )}
            </div>
            <Button className='get-started-free-btn lg:ml-2'>Get Started For Free</Button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
