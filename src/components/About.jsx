import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {label}
  </span>
);

const About = () => {
  return (
    <section id="sobre-mi" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre mí</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Soy técnico, creativo y curioso. Me apasiona construir soluciones digitales que funcionen y
            sorprendan. Combino desarrollo Full‑Stack con administración de sistemas para entregar
            productos robustos, seguros y con gran experiencia de usuario.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Desarrollo Web</h3>
            <p className="mt-2 text-sm text-white/70">HTML, CSS, JavaScript, PHP, SQL</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillTag label="React" />
              <SkillTag label="Tailwind" />
              <SkillTag label="WordPress" />
              <SkillTag label="PrestaShop" />
              <SkillTag label="Joomla" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-3 inline-flex rounded-lg bg-violet-500/10 p-2 text-violet-400">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Sistemas</h3>
            <p className="mt-2 text-sm text-white/70">Redes, seguridad, automatización y monitorización</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillTag label="Linux" />
              <SkillTag label="NGINX/Apache" />
              <SkillTag label="Docker" />
              <SkillTag label="CI/CD" />
              <SkillTag label="Backups" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Bases de datos</h3>
            <p className="mt-2 text-sm text-white/70">Modelado, consultas y optimización</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <SkillTag label="MySQL" />
              <SkillTag label="MariaDB" />
              <SkillTag label="MongoDB" />
              <SkillTag label="PostgreSQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
