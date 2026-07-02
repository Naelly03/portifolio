import Image from "next/image";

const projects = [
  {
    title: "Gerenciador de Eventos",
    description: "Uma aplicação de gerenciamento de eventos para pequenos eventos.",
    image: "/images/easyeventhome.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    href: "https://event-manager-front-kappa.vercel.app/",
    github: null,
  },
  {
    title: "E-commerce Store",
    description: "Uma loja virtual moderna e responsiva para vendas online.",
    image: "/images/home-ecommerce.png",
    tech: ["React", "NestJS", "Stripe"],
    href: "https://developerecommerce.netlify.app/",
    github: null,
  },
  {
    title: "CO2 Monitoring",
    description: "Sistema fullstack de monitoramento de CO₂.",
    image: "/images/home.png",
    tech: ["NestJS", "Next.js", "Postgres"],
    href: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-[70px] border-t-2 border-line">
      <div className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7">
        <div className="mb-9 max-w-[720px]">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold tracking-[-0.01em] mb-3">
            Projetos.
          </h2>
          <p className="text-muted text-[1.05rem]">
            Aqui estão alguns projetos em que trabalhei. O foco é construir
            aplicações web esteticamente agradáveis e amigáveis ao usuário.
          </p>
        </div>

        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 max-[600px]:grid-cols-1 gap-6">
          {projects.map(({ title, description, image, tech, href, github }) => (
            <article
              key={title}
              className="bg-surface border-2 border-ink shadow-brutal flex flex-col overflow-hidden transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_var(--ink)]"
            >
              <div className="aspect-[4/3] border-b-2 border-ink overflow-hidden bg-bg">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <div className="p-[20px_22px_22px] flex flex-col gap-[10px] flex-1">
                <h3 className="text-[1.2rem] font-bold leading-tight">{title}</h3>
                <p className="text-muted text-[0.95rem] leading-[1.55]">{description}</p>

                <div className="font-mono text-[11px] text-ink-2 mt-auto pt-3 border-t border-dashed border-ink flex flex-wrap gap-[6px]">
                  {tech.map((t) => (
                    <span key={t} className="px-2 py-[3px] border border-ink bg-bg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[0.92rem] underline decoration-2 underline-offset-4"
                    >
                      Ver projeto →
                    </a>
                  ) : (
                    <span className="font-semibold text-[0.92rem] text-muted cursor-default">
                      Em desenvolvimento
                    </span>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] border border-ink px-2 py-1 text-ink-2 hover:bg-ink hover:text-bg transition-colors duration-150"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
