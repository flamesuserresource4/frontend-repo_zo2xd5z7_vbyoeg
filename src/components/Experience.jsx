import React from 'react';
import { Briefcase } from 'lucide-react';

const Card = ({ title, company, period, items }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500/40 hover:bg-white/10">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        {period}
      </span>
    </div>
    <p className="mt-1 text-sm text-cyan-300">{company}</p>
    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/80">
      {items.map((it, idx) => (
        <li key={idx}>{it}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="experiencia" className="relative w-full bg-[#0b0b0b] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiencia</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Técnico de TI / Full‑Stack"
            company="YCG Digital Group"
            period="Actualidad"
            items={[
              'Desarrollo web con WordPress, PrestaShop y Joomla',
              'Optimización de rendimiento, seguridad y SEO técnico',
              'Soporte técnico y administración de sistemas',
              'Automatización de tareas y mejoras de usabilidad'
            ]}
          />

          <Card
            title="Técnico y Atención al Cliente"
            company="Decathlon"
            period="Anterior"
            items={[
              'Reparación y soporte técnico en tienda',
              'Atención al cliente con orientación a resultados',
              'Trabajo en equipo y gestión de incidencias',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
