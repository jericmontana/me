import React, { Component } from 'react'

export default class StickyHeader extends Component {
    constructor(){
        super();

        this.currentScrollTop = 0;
        this.sticky = false;

        window.addEventListener('scroll', this.onScroll.bind(this), false);
    }

    onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.getElementById('site-header');

        // Scroll Up Once
        if(scrollTop < this.currentScrollTop && !this.sticky){
            header.classList.add('site-header-sticky');
            header.classList.remove('site-header-hidden');
        }

        // Scrolling Down Once
        if(scrollTop > this.currentScrollTop && this.sticky){
            header.classList.add('site-header-sticky', 'site-header-hidden');
        }

        // Scrolling Up
        if(scrollTop < this.currentScrollTop){
            this.sticky = true;
        }
        // Scrolling Down
        if(scrollTop > this.currentScrollTop){
            this.sticky = false;
        }

        this.currentScrollTop = scrollTop;

    }

    render() {
        return (
            <>{this.props.children}</>
        )
    }
}
