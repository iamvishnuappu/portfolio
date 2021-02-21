import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Typical from 'react-typical'
const steps = [
    'Hello 👋', 1000,
    'I am a Web Developer', 1000,
    'I am a Recent Post-Graduate', 1000,
    'I am a higly motivated Individual', 1000,
    'I love Coding ', 4000,
    'I love Soccer', 1000,
    
  ];
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> VISHNU MOHAN</span>
                </h1>
                
                    <p align="center">
        <Typical wrapper="span" steps={steps} loop={1} className={'caca'} />
      </p>
                
                
            </header>
            
        </div>
    )
}

export default HomePage;
