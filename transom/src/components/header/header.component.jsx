import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';
import Hamburger from 'hamburger-react'

function Header() {
    const [isOpen, setOpen] = useState(false)

    return (

        <nav id="nav-bar">
            <ul>
                <li>
                    <NavLink exact to="/locations" className="left-buttons">
                        <div className="flag"><img src="images/flag.png" alt="flag-icon"></img></div>
                        <div className="nav-text">locations</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/order" className="left-buttons">
                        <div className="car"><img src="images/car.png" alt="car-icon"></img></div>
                        <div className="nav-text">order online</div>
                    </NavLink>
                </li>
            </ul>
            <div className='options'>
                <ul className="option">
                    <li><img src="images/gsb-logo.png" alt="gsb logo"></img></li>
                    <li className="hamburger"><Hamburger toggled={isOpen} toggle={setOpen} distance="lg" color="#ff9901" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header