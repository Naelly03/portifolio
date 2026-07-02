import Image from "next/image";

const categories = [
  {
    title: "Frontend",
    skills: [
      { icon: "/icons/javascript-plain.svg", name: "JavaScript" },
      { icon: "/icons/typescript-plain.svg", name: "TypeScript" },
      { icon: "/icons/react-original.svg", name: "React" },
      { icon: "/icons/nextjs-original.svg", name: "Next.js" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: "/icons/nodejs-original.svg", name: "Node.js" },
      { icon: "/icons/adonisjs-original.svg", name: "AdonisJS" },
      { icon: "/icons/nestjs-original.svg", name: "NestJS" },
    ],
  },
  {
    title: "DevOps & Outros",
    skills: [
      { icon: "/icons/docker-original.svg", name: "Docker" },
      { icon: "/icons/postgresql-original.svg", name: "PostgreSQL" },
      { icon: "/icons/mysql-original.svg", name: "MySQL" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[70px] border-t-2 border-line">
      <div className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7">
        <div className="mb-9 max-w-[720px]">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold tracking-[-0.01em] mb-3">
            Habilidades.
          </h2>
          <p className="text-muted text-[1.05rem]">
            Stack que uso no dia a dia, organizada por camada.
          </p>
        </div>

        <div className="border-2 border-ink shadow-brutal bg-surface">
          {categories.map(({ title, skills }, i) => (
            <div
              key={title}
              className={`flex max-[720px]:flex-col ${i < categories.length - 1 ? "border-b-2 border-ink" : ""}`}
            >
              <div className="w-[160px] shrink-0 px-6 py-5 border-r-2 max-[720px]:border-r-0 max-[720px]:border-b-2 border-ink flex items-center max-[720px]:py-4 max-[720px]:px-5">
                <span className="font-mono text-[11px] text-muted uppercase tracking-widest">
                  {title}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 px-6 py-5 max-[720px]:px-5 max-[720px]:py-4">
                {skills.map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-ink bg-bg text-[0.9rem] font-medium text-ink-2 shadow-brutal-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain shrink-0 skill-icon"
                    />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
