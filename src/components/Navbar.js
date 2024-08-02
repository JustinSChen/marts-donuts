import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #FFFEF5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding-left: 160px;
  padding-right: 160px;
`;

const NavLinks = styled.div`
  a {
    color: #3D2A2A;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
  }

  a:last-of-type {
    margin-right: 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src="../assets/logo.svg" />
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/catering">Catering</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/location">Location</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
