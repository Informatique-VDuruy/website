import React from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/common/header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/website"><img src="assets/images/logo.png" alt="Club d'informatique" /></Link>
      </div>
      <nav>
        <ul className="nav-menu">
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#planning">Events</a></li>
          {/* Add other menu items */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
