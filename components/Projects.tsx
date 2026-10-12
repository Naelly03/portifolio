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
    title: "DevLinks",
    description: "Projeto de agrupamento de links de rede sociais.",
    image: "/images/image.png",
    tech: ["Next.js", "Supabase"],
    href: "https://devlinks-mauve-five.vercel.app/",
    github: null,
  },
  {
    title: "CO2 Monitoring",
    description: "Sistema fullstack de monitoramento de CO₂.",
    image: "/images/home.png",
    tech: ["NestJS", "Next.js", "Postgres"],
    href: null,
    github: "https://github.com/Naelly03/monitoringCO2.git",
  },
];

const featured = {
  title: "Dungeons & Fitness",
  description:
    "Transforme exercícios reais em uma aventura de RPG! Cada atividade que você registra vira experiência (XP) pro seu herói, que sobe de nível, evolui e desbloqueia conquistas conforme você se exercita de verdade.",
  detail: "App mobile com Expo e React Native, API em Node.js + Fastify, publicado na App Store.",
  screens: [
    { src: "/images/dnf-home.png", alt: "Tela inicial do Dungeons & Fitness com o herói e XP" },
    { src: "/images/dnf-missoes.png", alt: "Tela de missões diárias do Dungeons & Fitness" },
    { src: "/images/dnf-registrar.png", alt: "Tela de registro de atividade do Dungeons & Fitness" },
  ],
  tech: ["Expo", "React Native", "Node.js", "Fastify"],
  appStore: "https://apps.apple.com/us/app/dungeons-fitness/id6809237695",
};

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
            aplicações web e mobile esteticamente agradáveis e amigáveis ao
            usuário.
          </p>
        </div>

        <article className="bg-surface border-2 border-ink shadow-brutal grid grid-cols-[1fr_300px] max-[900px]:grid-cols-1 gap-6 p-[22px] mb-6 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[7px_7px_0_var(--ink)]">
          <div className="flex flex-col gap-[10px] min-w-0">
            <span className="font-mono text-[11px] self-start px-2 py-[3px] border border-ink bg-bg">
              Projeto freelance · Mobile
            </span>
            <h3 className="text-[1.3rem] font-bold leading-tight">{featured.title}</h3>
            <p className="text-muted text-[0.92rem] leading-[1.55]">{featured.description}</p>
            <p className="text-ink-2 text-[0.88rem] leading-[1.5]">{featured.detail}</p>

            <div className="font-mono text-[11px] text-ink-2 mt-auto pt-3 border-t border-dashed border-ink flex flex-wrap gap-[6px]">
              {featured.tech.map((t) => (
                <span key={t} className="px-2 py-[3px] border border-ink bg-bg">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={featured.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[0.92rem] underline decoration-2 underline-offset-4"
              >
                App Store →
              </a>
              <span className="font-mono text-[11px] text-muted px-2 py-[3px] border border-dashed border-ink">
                Google Play · em revisão
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center self-center max-[900px]:max-w-[360px]">
            {featured.screens.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={230}
                height={498}
                className="w-full h-auto border-2 border-ink bg-bg"
                loading="lazy"
              />
            ))}
          </div>
        </article>

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
                  ) : null}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[0.92rem] underline decoration-2 underline-offset-4"
                    >
                      GitHub →
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
