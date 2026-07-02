const links = [
  {
    label: "LinkedIn",
    sub: "naelly-silva",
    href: "https://www.linkedin.com/in/naelly-silva-34613a20b",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.34 17.34v-7.13H6V17.34h2.34M7.17 9.16a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72M18 17.34v-3.91c0-2.04-1.09-2.99-2.55-2.99-1.18 0-1.71.65-2.01 1.1v-.94h-2.23c.03.66 0 7.13 0 7.13h2.23v-3.98c0-.2.01-.4.07-.55.16-.4.53-.82 1.14-.82.81 0 1.13.61 1.13 1.51v3.84H18Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    sub: "silvanaelly935@gmail.com",
    href: "mailto:silvanaelly935@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sub: "@Naelly03",
    href: "https://github.com/Naelly03",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7 py-[70px] max-[900px]:py-[50px] border-t-2 border-line grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-[50px] max-[900px]:gap-[30px] items-center"
    >
      <div>
        <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-4">
          Vamos conversar?
        </h2>
        <p className="text-muted text-[1.05rem] max-w-[460px] mb-6">
          Se quiser trocar uma ideia, propor um projeto ou só dizer oi, é só
          me chamar por um dos canais.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[11px] border-2 border-ink px-3 py-[6px] bg-surface text-ink-2">
              ● disponível para novos projetos
            </span>
          </div>
          <div className="flex flex-col gap-[6px] font-mono text-[12px] text-muted">
            <span>📍 Teresina, BR — UTC-3</span>
            <span>⚡ Resposta em até 24h</span>
          </div>
        </div>
      </div>

      <ul className="list-none bg-surface border-2 border-ink shadow-brutal transition-colors duration-300">
        {links.map(({ label, sub, href, icon }) => (
          <li key={label} className="border-b-2 border-ink last:border-b-0">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[14px] px-5 py-4 font-medium transition-colors duration-200 hover:bg-bg"
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center shrink-0">
                {icon}
              </span>
              <span>
                {label}
                <small className="block font-mono text-[11px] text-muted font-normal mt-[2px]">
                  {sub}
                </small>
              </span>
              <span className="ml-auto font-mono text-[14px]">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
