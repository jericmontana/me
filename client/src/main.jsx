import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../src/assets/prod/css/main.css'

import AnnouncementBar from './sections/AnnouncementBar'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'


ReactDOM.createRoot(document.querySelector('#root')).render(
  <Router>
    <AnnouncementBar />
    <Header />
    <Hero />
    <Services />
    <Portfolio />
  </Router>
)