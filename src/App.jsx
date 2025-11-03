import React from 'react';
import Hero from './components/Hero';
import TechBelt from './components/TechBelt';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">Ander · Portfolio</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#sobre-mi" className="hover:text-white">Sobre mí</a>
            <a href="#experiencia" className="hover:text-white">Experiencia</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        {/* 3D tech belt hugging the bottom of hero */}
        <TechBelt />
        <About />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Ander Sagardia Echeverría · Hecho con pasión, tecnología y café.
      </footer>
    </div>
  );
}

export default App;
