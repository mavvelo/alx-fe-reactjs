import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
  };

  const linkStyle = {
    margin: '0 15px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease', // Smooth color transition
  };

  const activeLinkStyle = {
    color: '#f9a825', // Highlight active link
    fontWeight: 'bold', // Make active links bolder
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ ...linkStyle, ...activeLinkStyle }}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

export default Navbar;