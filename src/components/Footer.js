import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div>
          <img src={logo} />
        </div>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/menu">Catering</a>
          <a href="/catering">Location</a>
          <a href="/about">Our story</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="bold">+1 (760) 741-0717</p>
        <p class="bold">martsdonuts@gmail.com</p>
        <p>&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
        <div class="footer-links">
          <a href="/menu">Privacy Policy</a>
          <a href="/catering">Terms of Service</a>
          <a href="/about">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
