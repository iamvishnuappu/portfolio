import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'70%'} />
                <SkillsSection skill={'CSS'} progress={'70%'} width={'80%'} />
                <SkillsSection skill={'Firebase'} progress={'70%'} width={'80%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'Relational Database'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web Development and Management'} 
                text={'HTMLS, REACT.JS, NODE.JS, CSS, BOOTSTRAP, PHP, ANGULAR.JS, ASP.net'}
                />
                <ServicesSection image={design} title={'Database Management'} 
                text={'MYSQL,PL/SQL,FIREBASE, ORCALE SERVER, MONGO DB, REALTIONAL DATABASE'}
                />
                <ServicesSection image={design} title={'Software Development'} 
                text={'JAVA,PYTHON,C++,C# ,ANDRIOD STUDIO'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
