import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {

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

    return (
        <div className='NavBarContainer FlexColumn FlexCenter'
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