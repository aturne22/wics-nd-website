/*
import { useState } from 'react'
import wicsLogo from './assets/wicsLogo.png'
import headerLogo from './assets/headerLogo.png'
import graceHop from './assets/graceHop.png'
import './App.css'
import Header from './Header'


function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
      </Routes>
    </Router>
    </div>
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
  )
}


export default App;

 <Header/>

this is the one that works (below)

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './App.css';
import Header from './Header';
import About from './About';
import Team from './Team';
import Events from './Events';
import GetInvolved from './GetInvolved';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
        </Routes>
      </div>
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
    </Router>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import GetInvolved from './GetInvolved';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


