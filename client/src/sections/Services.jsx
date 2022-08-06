import React from 'react'
import '../assets/prod/css/section-services.css'
import services from '../data/services.json'

import ImgWebDev from '../assets/prod/img/Web_Development.png'
import ImgWebDesign from '../assets/prod/img/Web_Design.png'
import ImgCRO from '../assets/prod/img/CRO.png'

const ServicesSection = () => {

    const serviceImages = [ImgWebDev, ImgWebDesign, ImgCRO];

    return (
        <section className="services">
            <div className='blur' style={{ background: 'blue', top: '100%', left: '75%'}}></div>
            <div className='blur small-hide' style={{ background: 'red', top: '40%', left: '10%'}}></div>
            <div className='blur medium-hide large-up-hide' style={{ background: 'red', top: '30%', left: '10%'}}></div>
            
            <div className="section-container">
                <div className="page-width">
                    <div className="section__header">
                        <h2 className="title h2">Skills and Services</h2>
                    </div>

                    <div className="section__services">
                    <div className="grid grid--1-col grid--3-col-desktop grid--2-col-tablet">
                        {services && services.map((service, index) => {
                            return (
                                <div key={index} className="grid__item">
                                    <div className="service-card" id={"service-card--" + (index + 1)}>
                                        <img draggable="false" className='service-image' src={serviceImages[index]} alt={service.name} title={service.name + ' ' + service.name2} loading="lazy" width='200' height='125'/>
                                        <h3 className='service-name h3'>{service.name}<br />{service.name2}</h3>
                                        <p className='service-desc'>{service.description}</p>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection