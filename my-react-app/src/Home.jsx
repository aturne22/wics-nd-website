// Home.jsx
import React from 'react';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './Header.css'
import './App.css'

const Home = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item1">
          <img src={wicsLogo} className="logo" alt="WiCS Logo" />
        </div>
        <div className="grid-item2">
          <div className="inner-container">
            <h1>
              We are <span id="highlight">Women In Computer Science</span> at the University of Notre Dame 
            </h1>
            <p>
              Dedicated to building a community of women in technology
            </p>
          </div>
        </div>
      </div> 
      <div className="grid-column">
        <div className="grid-column-item">
          <p className='title'>
            Empowering <span id="highlight">Women</span>, Innovating Tomorrow
          </p>
        </div>
        <div className="image-container">
          <img src={graceHop} className="picture" alt="WiCS @ Grace Hopper" />
        </div>
      </div>
      <div className="grid-button">
        <button className="button1" role="button">team</button>
        <button className="button1" role="button">events</button>
        <button className="button1" role="button">get involved</button>
      </div>
      <div className="grid-column">
        <div className="grid-column-item">
          <p className='title2'>
            Follow Us!
          </p>
        </div>
        <div className="grid-column-item">
          <p className='title3'>
            Stay connected for the latest updates on our events, resources, and programs!
          </p>
        </div>
      </div>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </>
  );
};

export default Home;
