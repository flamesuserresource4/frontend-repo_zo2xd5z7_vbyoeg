import React from 'react';

export default function About() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Sobre mí</h2>
      <p className="mt-4 max-w-3xl text-slate-300">
        Soy Ander Sagardia Echeverría, especializado en DevOps y desarrollo web. Me apasiona crear
        experiencias 3D con alto rendimiento y sistemas robustos: pipelines CI/CD, monitorización,
        contenedores y plataformas cloud. Este sitio es una mezcla de portafolio y CV visual.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <h3 className="text-base font-medium text-white">Infraestructura</h3>
          <p className="mt-2 text-sm text-slate-300">
            Kubernetes, Terraform, observabilidad, automatización y seguridad.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <h3 className="text-base font-medium text-white">Frontend 3D</h3>
          <p className="mt-2 text-sm text-slate-300">
            React, Spline, animaciones con Framer Motion y performance centrada en UX.
          </p>
        </div>
      </div>
    </section>
  );
}
