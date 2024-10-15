import React from 'react'
import { contactInfo, footerLinks, footerIcons } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  const indexContactUs = footerLinks.findIndex(link => link.id === "contactUs");
  const firstList = footerLinks.slice(0, indexContactUs);
  const secondList = footerLinks.slice(indexContactUs);

  return (
    <footer className='flex xs:flex-col p-9 lg:p-6 lg:mt-[5rem] lg:ml-4 bg-footerBg'>
      <img src={logo} alt="logo" width={150} height={150} />
      <div className='flex flex-col lg:flex-row lg:gap-8 lg:p-5'>
        {/* Contact Information Section */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:gap-8 lg:w-1/2">
          {/* First contact info item, in its own column */}
          <div className="flex gap-4 lg:basis-1/2">
            <img src={contactInfo[0].icon} alt={contactInfo[0].id} className="footer-icon" />
            <p className="text-white xs:text-fontSize">{contactInfo[0].content}</p>
          </div>

          {/* Column containing the next two contact info items */}
          <div className="flex flex-col gap-4 lg:basis-1/2">
            {contactInfo.slice(1).map((contact) => (
              <div key={contact.id} className="flex gap-4 mt-4">
                <img src={contact.icon} alt={contact.id} className="footer-icon" />
                <p className="text-white xs:text-fontSize">{contact.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-8 flex flex-col lg:flex-row lg:gap-10 lg:w-1/4 lg:mt-0">
          <ul className='mb-4'>
            {firstList.map((link) => (
              <li key={link.id} className="text-white mb-4 xs:text-fontSize">
                <a href={`#${link.id}`} className='hover: text-white'>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul>
            {secondList.map((link) => (
              <li key={link.id} className="text-white mb-4 xs:text-fontSize">
                <a href={`#${link.id}`} className='hover:font-bold'>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Icons Section */}
        <div className="flex gap-3 items-center justify-center mt-8 lg:w-1/4 lg:mt-0">
          {footerIcons.map(icon => (
            <div
              key={icon.id}
              className="icon-wrapper flex justify-center items-center p-2 
               border border-transparent hover:border-callToActionCyan 
               transition duration-300"
            >
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-callToActionCyan transition duration-300"
              >
                <i className={`fa-brands ${icon.title}`}></i>
              </a>
            </div>
          ))}

        </div>
      </div>
    </footer>

  )
}

export default Footer
