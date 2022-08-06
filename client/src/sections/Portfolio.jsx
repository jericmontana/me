import React from 'react'
import '../assets/prod/css/section-portfolio.css'

import IconCaret from '../snippets/IconCaret'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const PortfolioSection = () => {

    const projects = [
        {
            description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc est non modo cor non habere, sed ne palatum quidem. Tum Torquatus: Prorsus, inquit, assentior; Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Graece donan, Latine voluptatem vocant. Quos quidem tibi studiose et diligenter tractandos magnopere censeo."
        },
        {
            description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc est non modo cor non habere, sed ne palatum quidem. Tum Torquatus: Prorsus, inquit, assentior; Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Graece donan, Latine voluptatem vocant. Quos quidem tibi studiose et diligenter tractandos magnopere censeo."
        },
        {
            description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc est non modo cor non habere, sed ne palatum quidem. Tum Torquatus: Prorsus, inquit, assentior; Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Graece donan, Latine voluptatem vocant. Quos quidem tibi studiose et diligenter tractandos magnopere censeo."
        },
        {
            description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc est non modo cor non habere, sed ne palatum quidem. Tum Torquatus: Prorsus, inquit, assentior; Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Graece donan, Latine voluptatem vocant. Quos quidem tibi studiose et diligenter tractandos magnopere censeo."
        },
        {
            description: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc est non modo cor non habere, sed ne palatum quidem. Tum Torquatus: Prorsus, inquit, assentior; Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Graece donan, Latine voluptatem vocant. Quos quidem tibi studiose et diligenter tractandos magnopere censeo."
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
                                    <SwiperSlide key={index}><p>{project.description}</p></SwiperSlide>
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