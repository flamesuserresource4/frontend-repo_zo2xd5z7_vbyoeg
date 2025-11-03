import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Led({ delay = 0 }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_1px_rgba(52,211,153,0.7)]"
      style={{ animation: `ledPulse 1.8s ease-in-out ${delay}s infinite` }}
    />
  );
}

function ServerTower({ index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Height grows with scroll; each tower has slight stagger
  const base = 0.4 + (index / total) * 0.4; // base proportion of container height
  const grow = useTransform(scrollYProgress, [0, 1], [0.85, 1.25]);
  const scaleY = useTransform(grow, v => Math.max(0.7, v));

  // Subtle parallax and sway
  const translateY = useTransform(scrollYProgress, [0, 1], [10, -20 - index * 2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.2 + index * 0.05, 1 + index * 0.05]);

  const floors = 3 + (index % 4);

  return (
    <div ref={ref} className="flex h-full items-end justify-center">
      <motion.div
        style={{
          height: `calc(${base * 100}% )`,
          scaleY,
          y: translateY,
          rotate,
        }}
        className="relative w-14 sm:w-16 md:w-20 origin-bottom rounded-md bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-slate-700/70 shadow-[0_12px_40px_-8px_rgba(16,185,129,0.25)]"
      >
        {/* Top bevel */}
        <div className="absolute -top-1 left-1 right-1 h-1 rounded-sm bg-slate-700/70" />
        {/* Face details: bays and vents */}
        <div className="flex h-full flex-col justify-between p-2">
          {[...Array(floors)].map((_, f) => (
            <div key={f} className="rounded-sm border border-slate-700/60 bg-slate-900/70 p-1">
              <div className="flex items-center justify-between gap-1">
                <div className="h-1 w-full rounded-sm bg-slate-700/70" />
                <Led delay={(index * 0.15 + f * 0.2) % 1.8} />
                <Led delay={(index * 0.18 + f * 0.22) % 1.8} />
              </div>
            </div>
          ))}
        </div>
        {/* Side light */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 rounded-b-md bg-emerald-500/10 blur-[2px]" />
      </motion.div>
    </div>
  );
}

export default function ServerCityBelt() {
  const cityRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cityRef, offset: ['start end', 'end start'] });
  const tilt = useTransform(scrollYProgress, [0, 1], [7, -4]);
  const depth = useTransform(scrollYProgress, [0, 1], [800, 600]);

  const towers = 13;

  return (
    <section ref={cityRef} className="relative w-full bg-black">
      {/* Crown of servers around the next section */}
      <div
        className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20"
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{ rotateX: tilt, perspective: depth }}
          className="pointer-events-none relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7"
        >
          {Array.from({ length: towers }).map((_, i) => (
            <ServerTower key={i} index={i} total={towers} />
          ))}

          {/* Ground glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-24 max-w-4xl rounded-full bg-emerald-500/10 blur-3xl" />
        </motion.div>
      </div>

      {/* Divider into About section */}
      <div className="pointer-events-none relative mx-auto h-16 max-w-7xl">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      </div>

      <style>{`
        @keyframes ledPulse {
          0%, 100% { opacity: 0.45; filter: drop-shadow(0 0 2px rgba(16,185,129,0.4)); }
          50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(16,185,129,0.9)); }
        }
      `}</style>
    </section>
  );
}
