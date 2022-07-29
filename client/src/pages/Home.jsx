import React from 'react'
import Services from '../sections/Services'
import Process from '../sections/Process'
import About from '../sections/About'
import Hero from '../sections/Hero'

const HomePage = () => {
  return (
    <div className="main" id="main">
        <Hero />
        <Services />
        <Process />
        <About />
    </div>
  )
}

export default HomePage