import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobile-footer.style.scss'

function MobileFooter() {
    return (
        <div className="mobile-footer-container">
            <footer>
                <div className="mobile-upper-container">
                    <ul className="mobile-links">

                        <li>
                            <NavLink exact to="/" className="mobile-upper-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/locations" className="mobile-upper-link">Locations</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/menu" className="mobile-upper-link">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" className="mobile-upper-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catering" className="mobile-upper-link">Catering</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/jobs" className="mobile-upper-link">Jobs</NavLink>
                        </li>

                        <li>
                            <img src="images/2x-wordmark.png" alt="wordmark logo" />
                        </li>
                    </ul>

                </div>

                <div className="mobile-bottom-container">
                    <ul className="lower-mobile-links">
                        <li className="mobile-lower-link">
                            <NavLink exact to="/privacy-policy">Privacy Policy</NavLink>
                        </li>
                        <li className="mobile-lower-link">
                            <span className="copyright">&copy; great state burger</span>
                        </li>
                        <li className="mobile-lower-link">
                            <NavLink exact to="/credits">site credits</NavLink>
                        </li>
                    </ul>
                </div>
            </footer >
        </div >
    );
}

export default MobileFooter