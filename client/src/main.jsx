import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../src/assets/prod/js/webcomponents.js'
import '../src/assets/prod/css/main.css'

import AnnouncementBar from './sections/AnnouncementBar'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'


ReactDOM.createRoot(document.querySelector('#root')).render(
  <Router>
    <AnnouncementBar />
    <Header />
    <Hero />
    <Services />
    <div className="stickyheadertest">Sticky Header on Scrollup Testing</div>
  </Router>
)