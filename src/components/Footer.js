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
              <div class="social-block">
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
            <p className="bold">(760) 741-0717</p>
            <p className="bold">martsdonuts@gmail.com</p>
            <p>&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
        ) : (
          <footer class="desktop">
          <div className="footer-top">
            <div class="logo">
              <img src={logo} />
              <div class="social-block">
              <a class="social" href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="Facebook" />
              </a>
              <a class="social" href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="Instagram" />
              </a>
              </div>
            </div>
            <div className="footer-links">
              <a href="/menu">Menu</a>
              <a href="/catering">Location</a>
              <a href="/about">Our story</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="bold">(760) 741-0717</p>
            <p className="bold">martsdonuts@gmail.com</p>
            <p>&copy; 2024 MARTS DONUTS IN ESCONDIDO, CA. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
        )
      }
    </>
  );
};

export default Footer;
