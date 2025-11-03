import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="pointer-events-none text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Ander Sagardia Echeverría
        </h1>
        <p className="pointer-events-none mt-4 max-w-2xl text-base text-emerald-200/90 sm:text-lg">
          DevOps & Web Engineer — 3D-driven interfaces, scalable infra, and delightful UX.
        </p>
      </div>
    </section>
  );
}
