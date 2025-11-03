import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const contentRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMouse({ x: e.clientX / innerWidth, y: e.clientY / innerHeight });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallax = (base = 0, intensity = 20) => {
    const offset = Math.min(scrollY, 200) / 200; // 0..1
    return `translateY(${base + -offset * intensity}px)`;
  };

  const blobTransformA = {
    transform: `translate(${(mouse.x - 0.5) * 40}px, ${(mouse.y - 0.5) * 40}px)`
  };
  const blobTransformB = {
    transform: `translate(${(0.5 - mouse.x) * 60}px, ${(0.5 - mouse.y) * 60}px)`
  };

  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white pb-24">
      {/* Spline 3D scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dynamic gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grainy dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        {/* Vibrant moving blobs (purple/blue) */}
        <div
          className="absolute -top-20 -left-20 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.45),transparent_60%)] blur-2xl"
          style={blobTransformA}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)] blur-2xl"
          style={blobTransformB}
        />
        {/* Subtle top highlight */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-20 md:pt-36"
        style={{ transform: parallax(0, 16) }}
      >
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Portafolio Técnico · 2025
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Ander Sagardia</span>
          <span className="block bg-gradient-to-r from-violet-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Echeverría
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
          Técnico de TI · Full‑Stack Developer · SysAdmin
        </p>

        <p className="max-w-2xl text-white/75">
          Construyo experiencias digitales modernas con enfoque en rendimiento, seguridad y un toque
          visual potente.
        </p>

        <div className="mt-2 flex items-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px] hover:brightness-110"
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

      {/* Bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/20 via-violet-500/10 to-transparent blur-2xl" />
    </section>
  );
};

export default Hero;
