import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.style.scss'

function Footer() {
    return (
        <div className="footer-container">
            <footer>
                <div className="upper-container">
                    <ul className="links">
                        <li className="image-container">
                            <img src="images/2x-wordmark.png" alt="wordmark logo" />
                        </li>
                        <li>
                            <NavLink exact to="/" className="upper-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/locations" className="upper-link">Locations</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/menu" className="upper-link">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" className="upper-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catering" className="upper-link">Catering</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/jobs" className="upper-link">Jobs</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom-container">
                    <ul className="links">
                        <li className="lower-link">
                            <NavLink exact to="/privacy-policy">Privacy Policy</NavLink>
                        </li>
                        <li className="spacer">
                            |
                        </li>
                        <li className="lower-link">
                            <NavLink exact to="/">&copy; great state burger</NavLink>
                        </li>
                        <li className="spacer">
                            |
                        </li>
                        <li className="lower-link">
                            <NavLink exact to="/credits">site credits</NavLink>
                        </li>
                    </ul>
                </div>
            </footer >
        </div >
    );
}

export default Footer