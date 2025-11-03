import React from 'react';
import { Code, Server, Database, User } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {label}
  </span>
);

const About = () => {
  return (
    <section id="sobre-mi" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre mí</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              Soy técnico, creativo y curioso. Me apasiona construir soluciones digitales que funcionen y
              sorprendan. Combino desarrollo Full‑Stack con administración de sistemas para entregar
              productos robustos, seguros y con gran experiencia de usuario.
            </p>
          </div>

          {/* Single portrait image slot */}
          <div className="mx-auto w-full max-w-xs">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1">
              <div className="pointer-events-none absolute -inset-6 -z-[0] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Retrato de Ander"
                className="h-full w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] text-white/70 backdrop-blur">
                <User className="h-3 w-3" /> Foto
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-white/50">Puedes sustituir esta imagen por tu retrato.</p>
          </div>
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
