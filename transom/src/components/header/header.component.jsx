import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';

function Header() {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <nav className="header">
            {/* Left side buttons (disapear on mobile) */}
            <ul className="nav-options">
                <li class>
                    <NavLink activeClassName="nav-active" to="/locations" className="option">
                        <div className="flag"><img src="images/flag.png" alt="flag-icon"></img></div>
                        <div className="nav-text">locations</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-active" to="/order" className="option">
                        <div className="car"><img src="images/car.png" alt="car-icon"></img></div>
                        <div className="nav-text">order online</div>
                    </NavLink>
                </li>
            </ul>

            {/* right side buttons */}
            <ul className="right-nav">
                <li className="logo"><img src="images/gsb-logo.png" alt="gsb logo"></img></li>
                <li>
                    <div className={isActive ? "navigation active" : "navigation"} >
                        <div className="ham-btn" onClick={ToggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* menu options when hamburger clicked */}
                        <ul className="inner-left-nav-options">
                            <li>
                                <NavLink activeClassName="nav-active" className="inner-nav-option" to="/locations" >
                                    <div className="flag"><img src="images/flag.png" alt="flag-icon"></img></div>
                                    locations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" className="inner-nav-option" to="/order" >
                                    <div className="car"><img src="images/car.png" alt="car-icon"></img></div>
                                    order online
                                </NavLink>
                            </li>
                        </ul>
                        <div className="inner-logo-container">
                            <img src="images/gsb-logo.png" alt="gsb logo"></img>
                        </div>
                        <div className="links">
                            <div className="link">
                                <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/locations">Locations</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/menu" >Menu</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/about">About</NavLink>
                            </div>
                            <div className="link">
                                <NavLink activeClassName="nav-active" to="/jobs">Jobs</NavLink>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav >
    )
}

export default Header