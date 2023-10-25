import React from 'react'
import { useState, useEffect } from 'react';


import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {

    const location = useLocation()
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    console.log(location)
    return (

        location.pathname == '/photography' ?
            <div className='NavBarContainer FlexColumn FlexCenter'>
                <Link
                    className='NavBarLink'
                    to='/'
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    <p>
                        home
                    </p>
                </Link >
            </div > :
            <div className='NavBarContainer FlexColumn FlexCenter 1'
                style={{ opacity: `calc(0 + ${scrollPosition * 0.0035})`, }}>
                <Link
                    className={`NavBarLink ${scrollPosition > 10 ? '' : 'disableClick'}`}
                    to='/'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <p style={{ opacity: `calc(0 + ${scrollPosition * 0.0035})`, }}>
                        home
                    </p>
                </Link >
            </div >


    )
}

export default NavBar