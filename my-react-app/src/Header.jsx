
import React, { useState } from 'react';
import './Header.css'
import headerLogo from './assets/headerLogo.png';
import { Link } from "react-router-dom";
/*
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <img src={headerLogo} className="logoHeader" alt="Header WiCS Logo" />
            <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="/About">about</a></li>
                    <li><a href="/Team">team</a></li>
                    <li><a href="/Events">events</a></li>
                    <li><a href="/GetInvolved">get involved</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
*/

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
      setIsActive(!isActive);
  };

  return (
      <header className="header">
            <Link to="/">
                 <img src={headerLogo} className="logoHeader" alt="Header WiCS Logo" />
            </Link>
            <div className="container">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/About">
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/Team">
                                team
                            </Link>
                        </li>
                        <li>
                            <Link to="/Events">
                                events
                            </Link>
                        </li>
                        <li>
                            <Link to="/GetInvolved">
                                get involved
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    
      </header>
  );
};

export default Header;

