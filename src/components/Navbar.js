import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const openNav = () => {
    setMenuOpen(true);
  };

  const closeNav = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <nav className="mobile nav">
          <div className="icons">
              { menuOpen 
              ? 
              <FontAwesomeIcon icon={faXmark} onClick={closeNav}/>
              :
              <FontAwesomeIcon icon={faBars} onClick={openNav}/>
              }
          </div>
          <div className="logo">
              <img src={logo} alt="Donut Shop Logo" />
          </div>
          <div className={`overlay ${menuOpen ? 'open' : ''
          }`}>
            {menuOpen ? 
            <>
            <a href="/#/menu">Menu</a>
            <a href="/#/location">Location</a>
            <a href="/#/about">Our story</a></>  : <></>
            
            }
          </div>
        </nav>
      ) : (
        <nav className="desktop nav">
          <div className="nav-container">
            <div className="logo">
              <img src={logo} alt="Donut Shop Logo" />
            </div>
            <div className="nav-text">
              <p>+1 (760) 741-0717</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#/menu">Menu</a>
            <a href="/#/catering">Catering</a>
            <a href="/#/about">About</a>
            <a href="/#/contact">Contact Us</a>
            <a href="/#/location">Location</a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
