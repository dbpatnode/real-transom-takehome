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
            <ul className="nav-options">
                <li>
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
            {/* <div className='options'> */}
            <ul className="signin-up">
                <li className="logo"><img src="images/gsb-logo.png" alt="gsb logo"></img></li>
                <li><div className={isActive ? "navigation active" : "navigation"} >
                    <div className="ham-btn" onClick={ToggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="inner-disappeared-buttons">
                        <ul>
                            <li>
                                <NavLink activeClassName="nav-active" to="/locations" className="inner-left-buttons">
                                    <div className="flag"><img src="images/flag.png" alt="flag-icon"></img></div>
                                    <div className="nav-text">locations</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" to="/order" className="inner-left-buttons">
                                    <div className="car"><img src="images/car.png" alt="car-icon"></img></div>
                                    <div className="nav-text">order online</div>
                                </NavLink>
                            </li>
                        </ul>
                    </span>
                    <ul className="option">
                        <li className="inner-logo"><img src="images/gsb-logo.png" alt="gsb logo"></img></li>
                    </ul>
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
            {/* </div> */}
        </nav >
    )
}

export default Header