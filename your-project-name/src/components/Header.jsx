import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../asset/logo1.png';

const Header = () => (
  <header className="header">
    <div className="logo">  
      <img src={logo} alt="Shriji Logo"  />
   </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
