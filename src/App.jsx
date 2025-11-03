import React from 'react';
import Hero from './components/Hero.jsx';
import ServerCityBelt from './components/ServerCityBelt.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-white">
      <Hero />
      <ServerCityBelt />
      <About />
      <Contact />
    </div>
  );
}

export default App;
