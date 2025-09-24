// Header.js
import React from 'react';
import './Header.css'; // We will create this file for styling

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1>Savor the Exquisite Flavors of Dine Divine</h1>
        <p>Experience Culinary Excellence in Every Bite</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/specials">Specials</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;