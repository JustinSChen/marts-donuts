import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <img src={logo} />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/menu">Catering</a>
          <a href="/catering">Location</a>
          <a href="/about">Our story</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="bold">+1 (760) 741-0717</p>
        <p className="bold">martsdonuts@gmail.com</p>
        <p>&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
        <div className="footer-links">
          <a href="/menu">Privacy Policy</a>
          <a href="/catering">Terms of Service</a>
          <a href="/about">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
