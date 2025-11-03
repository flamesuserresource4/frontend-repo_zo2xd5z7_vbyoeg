import React, { useEffect, useRef, useState } from 'react';
import { Server, Monitor, Database } from 'lucide-react';

// 3D-like separator made with CSS perspective and scroll-reactive transforms.
// Theme: computers and servers. Animates subtly as you scroll towards "Sobre mí".
const TechSeparator = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1 how much this section is in view

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // when top starts entering to when center passes
      const start = vh * 0.9;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Map progress to transforms
  const rot = (p) => -8 + p * 16; // -8deg to +8deg
  const z = (p, base) => base + p * 40; // translateZ in px
  const y = (p, base) => base + p * -10; // translateY for slight lift

  return (
    <section
      ref={sectionRef}
      aria-label="Separador 3D de equipos y servidores"
      className="relative w-full bg-black py-16 text-white"
    >
      {/* Subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">infra · 3D</span>
          <h2 className="mt-3 text-xl font-semibold text-white/80">Del cero al rack</h2>
        </div>

        {/* 3D stage */}
        <div
          className="relative mx-auto h-[260px] w-full max-w-5xl overflow-visible"
          style={{ perspective: '900px' }}
        >
          <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-b from-violet-500/10 via-cyan-500/10 to-transparent blur-2xl" />

          {/* Server rack left */}
          <Card3D
            className="left-4 top-10 hidden md:block"
            icon={<Server className="h-6 w-6" />}
            title="Server Rack"
            lines={6}
            color="from-violet-500/20 to-cyan-400/20"
            style={{
              transform: `translateZ(${z(progress, 0)}px) translateY(${y(progress, 0)}px) rotateY(${rot(progress)}deg)`,
            }}
          />

          {/* Database center */}
          <Card3D
            className="left-1/2 top-2 -translate-x-1/2"
            icon={<Database className="h-6 w-6" />}
            title="Data Node"
            lines={4}
            color="from-cyan-400/25 to-violet-500/25"
            style={{
              transform: `translateZ(${z(progress, 30)}px) translateY(${y(progress, -4)}px) rotateY(${rot(progress) * -0.6}deg)`,
            }}
          />

          {/* Workstation right */}
          <Card3D
            className="right-4 top-16"
            icon={<Monitor className="h-6 w-6" />}
            title="Workstation"
            lines={3}
            color="from-violet-500/20 to-cyan-400/20"
            style={{
              transform: `translateZ(${z(progress, 10)}px) translateY(${y(progress, 2)}px) rotateY(${rot(progress) * 0.8}deg)`,
            }}
          />

          {/* Connector beam */}
          <div
            className="absolute left-1/2 top-1/2 h-0.5 w-[80%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-400/40 via-cyan-400/60 to-violet-400/40"
            style={{ filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.35))' }}
          />
        </div>

        {/* Hint */}
        <p className="mt-8 text-center text-sm text-white/60">
          Desliza hacia abajo: el hardware cobra vida mientras te acercas a "Sobre mí".
        </p>
      </div>
    </section>
  );
};

const Card3D = ({ className = '', icon, title, lines = 4, color = 'from-cyan-500/20 to-violet-500/20', style }) => {
  return (
    <div
      className={`absolute w-64 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-cyan-500/10 backdrop-blur-md will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 300ms ease', ...style }}
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-black/40 px-2 py-1 text-cyan-300">
        {icon}
        <span className="text-xs font-medium text-white/80">{title}</span>
      </div>
      <div className={`rounded-xl bg-gradient-to-br ${color} p-3 ring-1 ring-white/10`}>
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="h-3 rounded bg-black/30 ring-1 ring-black/20"
              style={{ transform: `translateZ(${(i + 1) * 2}px)` }}
            />
          ))}
        </div>
      </div>
      {/* Base glow */}
      <div className="pointer-events-none absolute inset-x-6 bottom-[-18px] h-12 rounded-full bg-cyan-500/20 blur-2xl" />
    </div>
  );
};

export default TechSeparator;
