// src/components/Hero.tsx
import React from 'react';
import './../../assets/css/pages/home/hero.css'; // Import the CSS file with the appropriate relative path


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Informatics Club</h1>
        <p>We are passionate about technology and learning.</p>
        <button className="cta-button">Join Us</button>
      </div>
    </section>
  );
}

export default Hero;
