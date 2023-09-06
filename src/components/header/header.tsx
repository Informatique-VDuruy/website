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
          <li><a href="/website/ressources">Ressources</a></li>
          <li><a href="/website/seances">Seances</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
