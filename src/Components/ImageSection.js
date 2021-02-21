import React from 'react';
import about from '../img/about.jpg';
import {Link} from 'react-router-dom';
import Resume from  '../img/Vishnu-Resume-1.pdf';
function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Vishnu Mohan</span></h4>
                <p className="about-text">
                <p>Multitalented and a recent post- graduate with one year experience in the software industry. </p>
                <p>True team player with strengths in adaptability and accuracy. </p>
                <p>Results-oriented software engineering professional with 1 year of experience in the field. </p>
                Well-versed in promoting object- oriented approaches to real-time software development. 
                Analytical and detail-oriented.
                
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Vishnu Mohan</p>
                        <p>: 25</p>
                        <p>: Indian</p>
                        <p>: English</p>
                        <p>: 3050 Ellesmere Road,Toronto, M1E5E6</p>
                        
                    </div>
                </div>
                <button className="btn"><a href={Resume} target="_blank" download>Download Cv</a></button>
                
            </div>
        </div>
    )
}

export default ImageSection;
