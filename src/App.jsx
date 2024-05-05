import React from 'react'
import { Header, Hero, Services, About, Testimonials, Newsletter, Footer } from './components'

const App = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Hero />     
      <Services />
      <About />      
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
