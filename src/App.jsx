import React from 'react'

import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Photos from './components/Photos'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Header from './components/Header'

function App() {


  return (
    <div className="App overflow-x-hidden">
      <div id='home' className='w-screen h-screen '>

        <Navbar />
        <Header />
        <section id='about' className=''>
          <About />
        </section>
        <section id='services' className=''>
          <Skills />
        </section>
        <Testimonials />
        <section id='projects' className='h-3/6'>
          <Photos />
        </section>




        <Footer />


      </div>
    </div>
  )
}

export default App
