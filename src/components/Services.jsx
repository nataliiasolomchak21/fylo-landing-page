import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='p-9'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
        {services.map((service) => (
          <div key={service.id} className='flex flex-col justify-center items-center text-center mt-8'>
            <img src={service.icon} alt={service.title} width={70} height={70} />
            <h2 className='text-lg mt-4 font-raleway text-white font-fontWeight700'>{service.title}</h2>
            <p className='text-fontSize mt-2 font-openSans text-white font-fontWeight400'>{service.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
