import React from 'react'
import { contactInfo, footerLinks } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  return (
    <footer className='flex xs:flex-col p-9'>
      <img src={logo} alt="logo" width={150} height={150} />
      <div>
        {contactInfo.map((contact) => (
          <div key={contact.id} className='flex'>
            <img src={contact.icon} alt={contact.id} />
            <p className='text-white'>{contact.content}</p>
          </div>
        ))}
      </div>
      <ul>
        {footerLinks.map((link) => (
          <li key={link.id} className='text-white'>
            <a href={`#${link.id}`}>{link.title}</a></li>
        ))}
      </ul>
   Icons
   Icons
   Icons
    </footer>
  )
}

export default Footer
