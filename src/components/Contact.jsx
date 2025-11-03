import React from 'react';

export default function Contact() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contacto</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          ¿Te gustaría colaborar o tienes una propuesta? Escríbeme y construyamos algo potente.
        </p>
        <div className="mt-6 text-sm text-slate-300">
          <p className="break-words">Email: <span className="text-white">ander@example.com</span></p>
          <p className="mt-1">LinkedIn: <a className="text-emerald-400 hover:underline" href="#" rel="noreferrer">/in/ander</a></p>
          <p className="mt-1">GitHub: <a className="text-emerald-400 hover:underline" href="#" rel="noreferrer">@andersagardia</a></p>
        </div>
      </div>
    </section>
  );
}
