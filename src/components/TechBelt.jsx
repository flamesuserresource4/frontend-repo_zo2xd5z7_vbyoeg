import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Monitor, Database } from 'lucide-react';

// Full-width 3D belt at the bottom of the hero.
// Uses perspective + scroll-linked transforms for subtle parallax and depth.
const TechBelt = () => {
  const beltRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: beltRef,
    offset: ['start end', 'end start'],
  });

  // Global belt animations
  const beltTilt = useTransform(scrollYProgress, [0, 1], [6, -6]); // tilt as you scroll
  const beltDepth = useTransform(scrollYProgress, [0, 1], [0, 40]); // slight push in
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]);

  return (
    <section aria-label="Cinturón 3D tecnológico" className="relative -mt-16 w-full select-none bg-transparent">
      {/* Outer glow that hugs the bottom of the hero */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-6 h-24 bg-gradient-to-t from-cyan-400/30 via-violet-400/20 to-transparent blur-2xl"
        style={{ opacity: glowOpacity }}
      />

      <div ref={beltRef} className="relative mx-auto max-w-[1400px] px-4">
        <div
          className="relative mx-auto h-[180px] w-full overflow-visible"
          style={{ perspective: '1100px' }}
        >
          {/* Stage */}
          <motion.div
            className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5/0"
            style={{ transformStyle: 'preserve-3d', rotateX: beltTilt, y: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 -z-0 rounded-3xl bg-gradient-to-b from-black/0 via-black/10 to-black/0" />

            {/* Belt track */}
            <div className="absolute inset-x-0 bottom-6 top-6">
              <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
                {/* Track base */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-14 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/70 shadow-inner"
                  style={{ translateZ: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
                />

                {/* Items on the belt: servers, databases, monitors */}
                <BeltItem
                  icon={<Server className="h-7 w-7" />}
                  label="Rack A"
                  xPercent={-36}
                  zBase={30}
                  scrollYProgress={scrollYProgress}
                  rotateFactor={12}
                  floatFactor={8}
                  tint="from-violet-500/25 to-cyan-400/25"
                />
                <BeltItem
                  icon={<Database className="h-7 w-7" />}
                  label="DB Core"
                  xPercent={-12}
                  zBase={46}
                  scrollYProgress={scrollYProgress}
                  rotateFactor={-10}
                  floatFactor={10}
                  tint="from-cyan-400/25 to-emerald-400/25"
                />
                <BeltItem
                  icon={<Monitor className="h-7 w-7" />}
                  label="Ops Console"
                  xPercent={12}
                  zBase={36}
                  scrollYProgress={scrollYProgress}
                  rotateFactor={8}
                  floatFactor={6}
                  tint="from-violet-500/25 to-cyan-400/25"
                />
                <BeltItem
                  icon={<Server className="h-7 w-7" />}
                  label="Rack B"
                  xPercent={36}
                  zBase={28}
                  scrollYProgress={scrollYProgress}
                  rotateFactor={-12}
                  floatFactor={7}
                  tint="from-cyan-400/25 to-violet-500/25"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BeltItem = ({ icon, label, xPercent = 0, zBase = 30, rotateFactor = 10, floatFactor = 8, tint = 'from-cyan-400/25 to-violet-500/25', scrollYProgress }) => {
  // Individual item motion derived from scroll
  const rotY = useTransform(scrollYProgress, [0, 1], [rotateFactor, -rotateFactor]);
  const rotZ = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [zBase, zBase + 30]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -floatFactor]);
  const pulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.65, 0.3]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2"
      style={{ transformStyle: 'preserve-3d', x: `${xPercent}%`, rotateY: rotY, rotateZ: rotZ, translateZ, y: translateY }}
    >
      {/* Body */}
      <div className={`relative h-full w-full rounded-2xl border border-white/10 bg-gradient-to-br ${tint} p-3 shadow-xl shadow-cyan-500/10 backdrop-blur`}
        style={{ transformStyle: 'preserve-3d' }}>
        <div className="flex items-center gap-2 text-cyan-200">
          {icon}
          <span className="text-xs font-medium text-white/80">{label}</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2.5 rounded bg-black/30" style={{ transform: `translateZ(${(i + 1) * 1.5}px)` }} />
          ))}
        </div>
        {/* LED pulse */}
        <motion.div
          className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-400"
          style={{ boxShadow: '0 0 8px rgba(16,185,129,0.8)', opacity: pulse }}
        />
      </div>
      {/* Soft base glow */}
      <motion.div
        className="pointer-events-none absolute inset-x-6 bottom-[-14px] h-10 rounded-full bg-cyan-500/25 blur-2xl"
        style={{ opacity: 0.5 }}
      />
    </motion.div>
  );
};

export default TechBelt;
