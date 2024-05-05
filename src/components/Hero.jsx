import React from 'react'
import { illustrationIntro } from '../assets'

const Hero = () => {
  return (
    <section>
      <div>
        <img src={illustrationIntro} alt="" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Hero
