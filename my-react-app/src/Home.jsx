// Home.jsx
/*
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


import React, { useEffect } from 'react';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './Header.css';
import './App.css';

const Home = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      <div className="instagram-feed">
        {[
          'https://www.instagram.com/p/C0f2VQJgmgy/?next=%2F',
          'https://www.instagram.com/p/C0SXi30xF-9/?next=%2F',
          'https://www.instagram.com/p/CzomUtORkyW/?next=%2F',
          'https://www.instagram.com/p/CywB78jxxAu/?next=%2F',
          'https://www.instagram.com/p/CyEmfAPRR7G/?next=%2F',
          'https://www.instagram.com/p/Cx0iXYYgpS7/?next=%2F&img_index=1',
          'https://www.instagram.com/p/CkbdoYXPG6J/?next=%2F',
          'https://www.instagram.com/p/CjTiKCiPnaO/?next=%2F',
          'https://www.instagram.com/p/CiQkc83PysK/?next=%2F'
        ].map((url, index) => (
          <div key={index} className="instagram-post">
            <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
              <div style={{ padding: '16px' }}>
                <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: '0', height: '40px', marginRight: '14px', width: '40px' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '60px' }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                    <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{ color: '#3897f0', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: '550', lineHeight: '18px' }}>View this post on Instagram</div>
                  </div>
                  <div style={{ padding: '12.5% 0' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                    <div> 
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div> 
                      <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: '0', marginRight: '14px', marginLeft: '2px' }}></div> 
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                    </div>
                    <div style={{ marginLeft: '8px' }}> 
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: '0', height: '20px', width: '20px' }}></div> 
                      <div style={{ width: '0', height: '0', borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}> 
                      <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div> 
                      <div style={{ backgroundColor: '#F4F4F4', flexGrow: '0', height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div> 
                      <div style={{ width: '0', height: '0', borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                    </div>
                  </div> 
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center', marginBottom: '24px' }}> 
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '224px' }}></div> 
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '144px' }}></div>
                  </div>
                </a>
                <p style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: '0', marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <a href={`${url}?utm_source=ig_embed&amp;utm_campaign=loading`} style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank">A post shared by WICS @ University of Notre Dame (@wics_nd)</a>
                </p>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </>
  );
};

export default Home;



import React, { useEffect } from 'react';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './Header.css';
import './App.css';

const Home = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      <div className="instagram-feed">
  {[
    'https://www.instagram.com/p/C0f2VQJgmgy/?next=%2F',
    'https://www.instagram.com/p/C0SXi30xF-9/?next=%2F',
    'https://www.instagram.com/p/CzomUtORkyW/?next=%2F',
    'https://www.instagram.com/p/CywB78jxxAu/?next=%2F',
    'https://www.instagram.com/p/CyEmfAPRR7G/?next=%2F',
    'https://www.instagram.com/p/Cx0iXYYgpS7/?next=%2F&img_index=1',
    'https://www.instagram.com/p/CkbdoYXPG6J/?next=%2F',
    'https://www.instagram.com/p/CjTiKCiPnaO/?next=%2F',
    'https://www.instagram.com/p/CiQkc83PysK/?next=%2F'
  ].map((url, index) => (
    <div key={index} className="instagram-post">
      <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
        <div style={{ padding: '16px' }}>
          <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
          </a>
        </div>
      </blockquote>
    </div>
  ))}
</div>

      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </>
  );
};

export default Home;
*/
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './Header.css';
import './App.css';

const Home = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
        <Link to="/Team" className="button1" role="button">Team</Link>
        <Link to="/Events" className="button1" role="button">Events</Link>
        <Link to="/GetInvolved" className="button1" role="button">Get Involved</Link>
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
      <div className="instagram-feed">
        {[
          'https://www.instagram.com/p/C0f2VQJgmgy/?next=%2F',
          'https://www.instagram.com/p/C0SXi30xF-9/?next=%2F',
          'https://www.instagram.com/p/CzomUtORkyW/?next=%2F',
          'https://www.instagram.com/p/CywB78jxxAu/?next=%2F',
          'https://www.instagram.com/p/CyEmfAPRR7G/?next=%2F',
          'https://www.instagram.com/p/Cx0iXYYgpS7/?next=%2F&img_index=1',
          'https://www.instagram.com/p/CkbdoYXPG6J/?next=%2F',
          'https://www.instagram.com/p/CjTiKCiPnaO/?next=%2F',
          'https://www.instagram.com/p/CiQkc83PysK/?next=%2F'
        ].map((url, index) => (
          <div key={index} className="instagram-post">
            <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
              <div style={{ padding: '16px' }}>
                <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                  {/* Placeholder and icons are removed */}
                </a>
              </div>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </>
  );
};

export default Home;

