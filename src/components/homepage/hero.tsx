// src/components/Hero.tsx
import './../../assets/css/pages/home/hero.css'; // Import the CSS file with the appropriate relative path


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenue au Club d'Informatique !</h1>
        <p>Découvrez le monde passionnant de l'informatique en travaillant avec vos amis sur des projets ludiques et captivants</p>
        <a href='https://forms.gle/xxGfrWw6c9rZeRWh6' target="_blank"><button className="cta-button">Rejoignez Nous</button></a>
      </div>
    </section>
  );
}

export default Hero;
