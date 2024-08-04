import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="nav">
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
        <a href="/menu">Menu</a>
        <a href="/catering">Catering</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/location">Location</a>
      </div>
    </nav>
  );
};

export default Navbar;
