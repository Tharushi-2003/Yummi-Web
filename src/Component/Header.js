import React from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">Yummi Restaurant</div>
        <ul className="nav-links">
        
          <li
            className={activeSection === "Home" ? "active" : ""}
            onClick={() => setActiveSection("Home")}
          >
            Home
          </li>
          <li
            className={activeSection === "Specials" ? "active" : ""}
            onClick={() => setActiveSection("Specials")}
          >
            Specials
          </li>
          <li
            className={activeSection === "Menu" ? "active" : ""}
            onClick={() => setActiveSection("Menu")}
          >
            Menu
          </li>
          <li
            className={activeSection === "Contact" ? "active" : ""}
            onClick={() => setActiveSection("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Savor the Exquisite Flavors of Yummi Restaurant</h1>
        <p>Experience Culinary Excellence in Every Bite</p>
      </div>
    </header>
  );
};

export default Header;