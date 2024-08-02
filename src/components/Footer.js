import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const FooterContainer = styled.footer`
  background: #FFFEF5;
  color: #3D2A2A;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} />
      <p>&copy; 2024 Donut Shop. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
