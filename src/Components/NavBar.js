import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 
                 <div className="icons">
                  
                    <a className="icon-holder" href="https://github.com/iamvishnuappu">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a className="icon-holder" href="https://www.linkedin.com/in/vishnu-mohan-017077165/">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>
                </div></div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Works
                        </NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @Vishnu Mohan
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
