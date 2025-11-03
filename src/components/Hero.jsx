import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-20 md:pt-36">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Portafolio Técnico · 2025
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Ander Sagardia</span>
          <span className="block">Echeverría</span>
        </h1>

        <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
          Técnico de TI · Full‑Stack Developer · SysAdmin
        </p>

        <p className="max-w-2xl text-white/70">
          Transformo ideas en experiencias digitales. Desarrollo web moderno, administración de
          sistemas y optimización de rendimiento orientados a impacto real.
        </p>

        <div className="mt-2 flex items-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px] hover:bg-cyan-400"
          >
            ¿Colaboramos? Hablemos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            Ver experiencia
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />
    </section>
  );
};

export default Hero;
