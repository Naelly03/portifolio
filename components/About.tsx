const facts = [
  { label: "Função", value: "Full-Stack & Mobile" },
  { label: "Base", value: "Teresina, BR" },
  { label: "Trabalho", value: "Remoto / Híbrido" },
  { label: "Idiomas", value: "PT · EN" },
  { label: "Status", value: "Disponível" },
];

export default function About() {
  return (
    <section id="sobre" className="py-[70px] border-t-2 border-line">
      <div className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7">
        <div className="mb-9 max-w-[720px]">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold tracking-[-0.01em] mb-3">
            Sobre.
          </h2>
          <p className="text-muted text-[1.05rem]">
            Um pouco do que faço, como trabalho e o que me move como
            desenvolvedora.
          </p>
        </div>

        <div className="grid grid-cols-[1.3fr_1fr] max-[900px]:grid-cols-1 gap-[50px] max-[900px]:gap-[30px]">
          <div>
            {[
              "Sou desenvolvedora full-stack & mobile, com atuação no front-end, no back-end e em aplicativos. Trabalho com React, Next.js, React Native, Node, NestJS e bancos relacionais — combinando o cuidado visual da interface com a estrutura sólida que um sistema precisa para escalar.",
              "Já entreguei desde lojas online completas até sistemas de monitoramento ambiental. Gosto de processos enxutos, código legível e produtos que respeitam quem está do outro lado da tela.",
            ].map((text, i) => (
              <p
                key={i}
                className="text-ink-2 text-[1.05rem] leading-[1.65] mb-4 last:mb-0"
              >
                {text}
              </p>
            ))}
          </div>

          <aside className="bg-surface border-2 border-ink shadow-brutal p-6 transition-colors duration-300">
            <h3 className="text-base font-semibold mb-[18px] flex items-center gap-[10px] before:content-[''] before:w-2 before:h-2 before:bg-ink before:transition-colors before:duration-300">
              Resumo
            </h3>
            <ul className="list-none">
              {facts.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex justify-between py-[10px] border-b border-dashed border-ink last:border-b-0 text-[0.92rem]"
                >
                  <span className="text-muted">{label}</span>
                  <span className="text-ink font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
