import React from 'react'
import '../assets/prod/css/section-hero.css'
import jeck from '../assets/prod/img/Jeric_Montana_Shopify_Developer_JECK.png'
import shopifyDeveloper from '../assets/prod/img/Shopify_developer_Jeric_Montana_JECK.png'


import {FiMail as Email} from 'react-icons/fi'
import {FiLinkedin as LinkedIn} from 'react-icons/fi'
import {FiGithub as GitHub} from 'react-icons/fi'
import {FiFacebook as Facebook} from 'react-icons/fi'

import accounts from '../data/media.json'


const HeroSection = () => {
  const icons = [<Email />, <LinkedIn />, <GitHub />, <Facebook />];

  return (
    <section className="hero">
      <div className='section__bg' style={{ backgroundColor: 'rgb(var(--color-section-bg))' }}></div>
      <div className='blur' style={{ backgroundColor: '#025E47', top: '10%', left: '80%', width: '10rem'}}></div>
      <div className='blur large-up-hide medium-hide' style={{ backgroundColor: '#03989E', bottom: '10%', left: '0%', width: '5rem'}}></div>
      <div className="section-container">
        <div className="page-width">
            <div className="grid grid--1-col grid--2-col-tablet grid--2-col-desktop">
                <div className="grid__item grid__item--text">
                  <div className="hero__text">
                    <p><img src={shopifyDeveloper} title="Shopify Developer" alt="Shopify Developer" draggable="false" width='250' height='48'/></p>
                    <h2 className='font-large'>Jeric Montaña</h2>
                    <p className='brief-intro'>Self-taught <span>Full Stack Shopify Developer</span> located in the <span>Philippines</span>.</p>

                    <div className="icons">
                      {accounts && accounts.map((account, index ) => {
                        return(
                          <div className="icon" key={ index.toString()}>
                            <a target="_blank" href={ account.href } title={ account.name } alt={ account.name }>{icons[index]}</a>
                          </div>
                        )})
                      }
                    </div>
                  
                  </div>
                </div>
                <div className="grid__item">
                  <div className="hero__image">
                    <img draggable="false" src={jeck} alt="Jeric Montana | Shopify Developer" title="Jeric Montana  | Shopify Developer" width='1080' height='1080'/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection