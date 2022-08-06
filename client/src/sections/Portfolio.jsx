import React from 'react'
import '../assets/prod/css/section-portfolio.css'

import IconCaret from '../snippets/IconCaret'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HomeInteriorItems from '../assets/prod/img/Shopify_Home_Interior_Items_Design.png'
import BeautyProduct from '../assets/prod/img/Shopify_Beauty_Product_Design.png'
import HealthAndWellness from '../assets/prod/img/Shopify_Health_and_Wellness_Design.png'


const PortfolioSection = () => {

    const projects = [
        {  
            niche : "Home Interior Items",
            image : HomeInteriorItems
        },
        {
            niche : "Beauty Product",
            image: BeautyProduct
        },
        {
            niche : "Health and Wellness",
            image: HealthAndWellness
        }
    ]
    

    return (
        <section className="portfolio">
            <div className="section-container">
                <div className="page-width">
                    <div className="section__header">
                        <h2 className='h2'>Design Example</h2>
                        <div className="swiper-buttons small-hide">
                            <div id="swiper-button-prev-portfolio" className="swiper-button swiper-button--prev"><IconCaret /></div>
                            <div id="swiper-button-next-portfolio" className="swiper-button swiper-button--next"><IconCaret /></div>
                        </div>
                    </div>
                    
                    <Swiper
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: '#swiper-button-prev-portfolio',
                            nextEl: '#swiper-button-next-portfolio'
                        }}
                        breakpoints={{
                            750: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            990: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            }
                          }}
                    >
                        {
                            projects && projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="swiper-item"><img src={project.image} alt={project.niche} title={project.niche} loading='lazy' draggable='false'/></SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection