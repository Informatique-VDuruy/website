// src/App.tsx
import React from 'react';
import Header from './components/header/header';
import Hero from './components/homepage/hero';
import AboutUs from './components/homepage/aboutus';
import Events from './components/homepage/events';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Events />
      </main>
      {/* Rest of your components and content */}
    </div>
  );
}

export default App;

    