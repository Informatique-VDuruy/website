// src/components/Hero.tsx
import React from 'react';
import './../../assets/css/pages/home/hero.css'; // Import the CSS file with the appropriate relative path


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Informatics Club</h1>
        <p>We are passionate about technology and learning.</p>
        <a href='https://forms.gle/xxGfrWw6c9rZeRWh6'><button className="cta-button">Rejoignez Nous</button></a>
      </div>
    </section>
  );
}

export default Hero;
