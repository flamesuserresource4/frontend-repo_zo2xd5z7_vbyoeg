import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contacto desde el portfolio');
    const body = encodeURIComponent(`Hola Ander,\n\nSoy ${name}.\n\n${message}\n\nPuedes responderme a: ${email}`);
    window.location.href = `mailto:ander@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contacto</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          ¿Tienes una idea o proyecto en mente? Me encantará escucharte y transformar tus objetivos en
          soluciones digitales.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring"
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntame sobre tu proyecto"
                rows={5}
                className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px] hover:bg-cyan-400"
              >
                <Mail className="mr-2 h-4 w-4" /> Enviar mensaje
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <p className="text-white/80">También puedes encontrarme en:</p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-white/70">
              <p>
                Disponible para colaboraciones, desarrollo web y proyectos de administración de
                sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
