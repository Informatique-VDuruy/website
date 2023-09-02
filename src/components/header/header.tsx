import React from 'react';
import './../../assets/css/common/header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="assets/images/logo.png" alt="Informatics Club Logo" />
      </div>
      <nav>
        <ul className="nav-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Events</a></li>
          {/* Add other menu items */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
