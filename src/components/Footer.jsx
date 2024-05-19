import React from 'react'
import { contactInfo, footerLinks, footerIcons } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  const indexContactUs = footerLinks.findIndex(link => link.id === "contactUs");
  const firstList = footerLinks.slice(0, indexContactUs);
  const secondList = footerLinks.slice(indexContactUs);

  return (
    <footer className='flex xs:flex-col p-9'>
      <img src={logo} alt="logo" width={150} height={150} />
      <div className='mt-8'>
        {contactInfo.map((contact) => (
          <div key={contact.id} className='flex gap-4 mt-4'>
            <img src={contact.icon} alt={contact.id} className='footer-icon'/>:
            <p className='text-white xs:text-fontSize'>{contact.content}</p>
          </div>
        ))}
      </div>
       <ul className='mt-20'>
        {firstList.map((link) => (
          <li key={link.id} className="text-white mb-4 xs:text-fontSize">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul className='mt-14'>
        {secondList.map((link) => (
          <li key={link.id} className="text-white mb-4 xs:text-fontSize">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 items-center justify-center mt-16">
      {footerIcons.map(icon => (
        <div key={icon.id} className="icon-wrapper">
          <a href={icon.link} target="_blank" rel="noopener noreferrer" className="block text-white">
            <i className={`fa-brands ${icon.title}`}></i>
          </a>
        </div>
      ))}
    </div>
    </footer>
  )
}

export default Footer
