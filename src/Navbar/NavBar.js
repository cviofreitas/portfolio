import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='NavBarContainer FlexRow FlexCenter FlexBetween'>
            <Link
                className='NavBarLink'
                to='/'>
                <p>
                    home
                </p>
            </Link>

            <p>
                about
            </p>
            <Link
                className='NavBarLink'
                to='/portfolio'>
                <p>
                    portfolio
                </p>
            </Link>
        </div>
    )
}

export default NavBar