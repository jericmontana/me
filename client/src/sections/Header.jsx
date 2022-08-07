import React, { Component } from 'react'
import logo from '../assets/prod/img/Jeric_Montana_Shopify_Developer_LOGO.png'

import { HiMenuAlt2 } from 'react-icons/hi'
import { HiOutlineX } from 'react-icons/hi'

import { Link } from 'react-router-dom'

import StickyHeader from '../snippets/StickyHeader'

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

export default class HeaderSection extends Component {

    state = { setDrawer: false, headerBounds: {}, currentScrollTop: 0, preventReveal: false }

    toggleDrawer() {
        this.setState(prevState => (
            { setDrawer: !prevState.setDrawer }
        ));
        const body = document.querySelector('body');
        body.classList.toggle('no-scroll--mobile');

        const headerDrawer = document.querySelector('.header__drawer');
        if(this.state.setDrawer){
            headerDrawer.classList.remove('active');
        }else{
            headerDrawer.classList.add('active');
        }
    }

    render() {
        return (
            <StickyHeader>
            <header className="header page-width animate" id="site-header">
                <div className="header__icon header__icon--drawer medium-hide large-up-hide" onClick={this.toggleDrawer.bind(this)}>
                    <span className="icon icon--hamburger"><HiMenuAlt2 /></span>
                </div>

                <div className="header__drawer medium-hide large-up-hide page-width">
                <div className="header__icon header__icon--drawer" onClick={this.toggleDrawer.bind(this)}>
                    <span className="icon icon--close"><HiOutlineX /></span>
                </div>
                <nav className="header-drawer__menu" onClick={this.toggleDrawer.bind(this)}>
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
            </StickyHeader>
        )
    }
}