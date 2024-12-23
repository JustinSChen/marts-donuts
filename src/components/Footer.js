import React, { useState, useEffect } from "react";
import logo from '../assets/logo.svg';
import facebook from "../assets/Facebook_b.svg"
import instagram from "../assets/Instagram_b.svg"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {
        isMobile ? (
          <footer class="mobile">
          <div className="footer-top">
            <div class="logo">
              <img src={logo} />
            </div>
            <div className="footer-links">
              <a href="/menu">Menu</a>
              <a href="/catering">Location</a>
              <a href="/story">Our story</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="bold">(760) 741-0717</p>
            <p className="bold">martsdonuts@gmail.com</p>
            <p class="copyright">&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
        ) : (
          <footer class="desktop">
          <div className="footer-top">
            <div class="logo">
              <img src={logo} />
            </div>
            <div className="footer-links">
              <a href="/menu">Menu</a>
              <a href="/catering">Location</a>
              <a href="/story">Our story</a>
            </div>
          </div>
          <div className="footer-bottom">
            <a href="tel:+17607410717">(760) 741-0717</a>
            <a href="mailto:martsdonuts@gmail.com">martsdonuts@gmail.com</a>
            <p class="copyright">&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
        )
      }
    </>
  );
};

export default Footer;
