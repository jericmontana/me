import React from 'react'
import '../assets/prod/css/section-announcementbar.css'

const AnnouncementBarSection = () => {
  return (
    <section className="announcementbar">
            <div className="section__bg" style={{backgroundColor: 'rgb(var(--color-section-bg))'}}></div>
            <div className="section-container">
                <div className="page-width">
                    <p className="center">🚧 Under <span className="uppercase">construction</span> 🚧</p>
                </div>
            </div>
        </section>
  )
}

export default AnnouncementBarSection