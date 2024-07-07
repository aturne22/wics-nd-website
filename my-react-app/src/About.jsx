import React from 'react';
import './About.css';
import './App.css';
import './Header.css';
import aboutPic from './assets/aboutPic.png';
import mouse from './assets/mouse.png';


const About = () => {
  return (
    <div>
        <div className="grid-container">
            <div className="grid-item3">
                <div className="inner-container">
                    <h1>
                        <span id="titleAbout">About Us</span>  
                    </h1>
                    <p className="aboutDescrip">
                        At the University of Notre Dame, the Women in Computer Science (WiCS) 
                        organization is dedicated to fostering a vibrant and inclusive community 
                        for women in technology. Our mission is to empower, inspire, and support 
                        women who are passionate about computer science and technology, driving 
                        innovation and breaking barriers in an ever-evolving field.
                    </p>
          </div>
        </div>
        <div className="grid-item4">
            <div className="image-container2">
                <img src={aboutPic} className="picture2" alt="About Picture" />
            </div>
        </div>
      </div> 
      <div className="grid-container">
        <div className="grid-item1">
            <div className="image-container2">
                <img src={mouse} className="picture2" alt="Mouse Graphic" />
            </div>
        </div>
        <div className="grid-item2">
                <div className="inner-container">
                        <h1>
                            <span id="titleAbout">Our Vision</span>  
                        </h1>
                        <p className="aboutDescrip">
                            We envision a future where women are 
                            at the forefront of technological advancements, 
                            leading with confidence, creativity, and resilience. 
                            By providing a strong support network, we aim to cultivate 
                            an environment where women can thrive academically, professionally, and personally.
                        </p>
                    </div>
            </div> 
        </div>
        <div className="footer">
    @ 2024 University of Notre Dame Women in CS
    </div>
    </div>
  );
};

export default About;