import React from 'react'
import { Header, Hero, Services, About, Testimonials, Newsletter, Footer } from './components'

const App = () => {
  return (
    <div className='bg-secondaryMainBg'>
      <Header className="bg-primaryIntroEmail" />
      <Hero className="bg-primaryIntroEmail" />     
      <Services />
      <About />      
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
