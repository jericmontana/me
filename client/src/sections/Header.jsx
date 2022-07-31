import React, { useState } from 'react'
import logo from '../assets/prod/img/Jeric_Montana_Shopify_Developer_LOGO.png'

import { HiMenuAlt2 } from 'react-icons/hi'
import { HiOutlineX } from 'react-icons/hi'

import { Link } from 'react-router-dom'


const HeaderSection = () => {
  const body = document.querySelector('body');
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    body.classList.toggle('no-scroll--mobile');
    setDrawer(!drawer)
  }

  const navigations = [
    {
      menu: "Home",
      link: "/"
    },
    {
      menu: "Education",
      link: "/skills"
    },
    {
      menu: "Projects",
      link: "/projects"
    },
    {
      menu: "Contact",
      link: "/contact"
    }
  ];

  return (
    <sticky-header>
    <header className="header page-width" id="site-header">

      <div className="header__icon header__icon--drawer medium-hide large-up-hide" onClick={toggleDrawer}>
          <span className="icon icon--hamburger"><HiMenuAlt2 /></span>
      </div>

      <div className={drawer ? 'header__drawer medium-hide large-up-hide page-width active' : 'header__drawer medium-hide large-up-hide'}>
        <div className="header__icon header__icon--drawer" onClick={toggleDrawer}>
            <span className="icon icon--close"><HiOutlineX /></span>
        </div>
        <nav className="header-drawer__menu" onClick={toggleDrawer}>
          <ul className="list-menu">
            {navigations.map((navigation, index) => {
              return(
                <li key={index.toString()}><Link className="link list-menu__item" to={navigation.link} title={navigation.menu}>{navigation.menu}</Link></li>
              )
            })}
          </ul>
          <div className="header__cta">
            <Link className='btn btn-he--lighten btn-bs btn--default btn--round-corner' to="/#" title='Contact Jeric Montaña'>Let's Talk</Link>
          </div>
        </nav>
      </div>

      <h1 className="header__heading">
        <div title="Jeric Montana | Shopify Developer" className='link'><Link to="/"><img src={logo} alt="Jeric Montana | Shopify Developer" title="Jeric Montana | Shopify Developer" width='250' height='69'/></Link></div>
      </h1>

      <nav className="header__inline-menu small-hide">
        <ul className="list-menu list-menu--inline">
          {navigations.map((navigation, index) => {
            return(
              <li key={index.toString()}><div className="link list-menu__item h4"><Link to={navigation.link} title={navigation.menu}>{navigation.menu}</Link></div></li>
            )
          })}
        </ul>
      </nav>

      <div className="header__cta">
        <Link className='btn btn--default btn-he--lighten btn--round-corner' to="/#" title='Contact Jeric Montana'>Let's Talk</Link>
      </div>

    </header>
    </sticky-header>
  )
}

export default HeaderSection