import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import facebook from "../assets/Facebook_b.svg"
import instagram from "../assets/Instagram_b.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div class="logo">
          <img src={logo} />
        </div>
        <div className="footer-links">
          <div>
          <a class="social" href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" />
          </a>
          <a class="social" href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="Instagram" />
          </a>
          </div>
          <a href="/menu">Menu</a>
          <a href="/catering">Location</a>
          <a href="/about">Our story</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="bold">+1 (760) 741-0717</p>
        <p className="bold">martsdonuts@gmail.com</p>
        <p>&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
