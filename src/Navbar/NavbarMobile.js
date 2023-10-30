import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './NavbarMobile.css'
const NavbarMobile = () => {
    const [menuSelected, setMenuSelected] = useState(false)

    const navigate = useNavigate()
    function handleNavigate(option) {
        navigate(option)

    }
    return (
        <div
            className={`navbar-mobile ${menuSelected ? 'drop-down' : ''}`}>
            <button className='menu-button' onClick={() => setMenuSelected(!menuSelected)}>
                +
            </button>
            <div className={`navbar-option-container-mobile ${menuSelected ? 'show' : ''}`}>
                <button
                    className="navbar-option-mobile"
                    onClick={() => {
                        handleNavigate('/')
                    }}
                >
                    home
                </button>
                <button
                    className="navbar-option-mobile"
                    onClick={() => {
                        handleNavigate('/photography')
                    }}
                    onLoad={() => console.log('button loaded')}>
                    photography
                </button>
            </div>
        </div >
    )
}

export default NavbarMobile