import TypewriterText from "./TypewriterText";
import CodeGlyph from "./CodeGlyph";

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7 py-[80px] max-[900px]:py-[50px] grid grid-cols-[1.3fr_0.9fr] max-[900px]:grid-cols-1 gap-[60px] max-[900px]:gap-10 items-center">
      {/* Marca-d'água </> — assinatura do banner do LinkedIn */}
      <CodeGlyph
        strokeWidth={7}
        className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 w-[clamp(240px,34vw,440px)] h-auto text-ink opacity-[0.05] max-[900px]:hidden"
      />

      <div className="relative z-10">
        <p className="font-mono text-[0.8rem] tracking-[0.24em] uppercase text-muted mb-[16px]">
          // olá, eu sou a naelly
        </p>

        <h1 className="text-[clamp(2.2rem,5.2vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-[22px]">
          Desenvolvedora
          <span className="block mt-1">
            <span className="bg-ink text-bg px-2 pb-0.5">Full-Stack &amp; Mobile.</span>
          </span>
        </h1>

        <p className="text-[1.1rem] text-muted max-w-[480px] mb-8">
          Crio interfaces fluidas, apps mobile e back-ends robustos para tirar
          ideias do papel e transformá-las em soluções reais.
        </p>

        <div className="flex gap-[14px] flex-wrap">
          <a
            href="#contato"
            className="px-[22px] py-[13px] font-sans text-[0.95rem] font-semibold border-2 border-ink bg-ink text-bg cursor-pointer transition-all duration-150 inline-flex items-center gap-2 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Contato
          </a>
          <a
            href="#projetos"
            className="px-[22px] py-[13px] font-sans text-[0.95rem] font-semibold border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-150 inline-flex items-center gap-2 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Projetos
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-[22px] py-[13px] font-sans text-[0.95rem] font-semibold border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-150 inline-flex items-center gap-2 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            ↓ CV
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center">
        <div
          aria-label="Terminal Naelly"
          className="w-[320px] h-[320px] max-[900px]:w-[260px] max-[900px]:h-[260px] border-2 border-ink bg-surface shadow-brutal relative overflow-hidden transition-colors duration-300"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 14px, color-mix(in oklab, var(--ink) 6%, transparent) 14px 15px)",
          }}
        >
          <span className="absolute top-[14px] left-[14px] font-mono text-[11px] bg-bg text-ink border-[1.5px] border-ink px-2 py-1 transition-colors duration-300">
            <TypewriterText text="// naelly.dev" delay={900} speed={55} variance={30} cursorHoldMs={1800} />
          </span>

          <div className="absolute top-[52px] left-[14px] right-[14px] bottom-[36px] flex flex-col justify-center font-mono text-[12px] leading-relaxed">
            <span className="text-muted">$ whoami</span>
            <span className="text-ink font-bold pl-2 mb-3">naelly silva</span>
            <span className="text-muted">$ cat role.txt</span>
            <span className="text-ink pl-2 mb-3">fullstack &amp; mobile</span>
            <span className="text-muted">$ status --check</span>
            <span className="text-ink pl-2">● disponível</span>
          </div>

          <span className="absolute bottom-[14px] left-[14px] right-[14px] font-mono text-[11px] text-muted flex justify-between">
            <span>teresina, br</span>
            <span>v.2026</span>
          </span>
        </div>
      </div>
    </section>
  );
}
