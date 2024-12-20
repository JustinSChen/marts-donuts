import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/Facebook.svg"
import instagram from "../assets/Instagram.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setMenuOpen(false);
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
                    <FontAwesomeIcon 
            icon={menuOpen ? faXmark : faBars} 
            onClick={menuOpen ? closeNav : openNav} 
            className={`icon ${menuOpen ? 'open' : ''}`}
          />
          </div>
          <div className="logo">
              <a href="/" onClick={closeNav}>
              <img src={logo} alt="Donut Shop Logo" />
              </a>
          </div>
          <div className={`overlay ${menuOpen ? 'open' : ''
          }`}>
            {menuOpen ? 
            <>
            <span class="number">(760) 741-0717</span>
            <Link class="link" to="/menu" onClick={closeNav}>Menu</Link>
            <Link class="link" to="/location" onClick={closeNav}>Location</Link>
            <Link class="link" to="/story" onClick={closeNav}>Our story</Link>
            <Link class="social" to="https://www.facebook.com/" target="_blank" onClick={closeNav}>
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link class="social" to="https://www.instagram.com/" target="_blank" onClick={closeNav}>
            <img src={instagram} alt="Instagram" />
            </Link>
            </>  : <></>
            }
          </div>
        </nav>
      ) : (
        <nav className="desktop nav">
          <div className="nav-container">
            <div className="logo">
            <a href="/">
              <img src={logo} alt="Donut Shop Logo" />
              </a>
            </div>
            <div className="nav-text">
              <p>(760) 741-0717</p>
            </div>
          </div>
          <div className="nav-links">
            <Link to="/" onClick={closeNav}>Home</Link>
            <Link to="/menu" onClick={closeNav}>Menu</Link>
            <Link to="/location" onClick={closeNav}>Location</Link>
            <Link to="/story" onClick={closeNav}>Story</Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
