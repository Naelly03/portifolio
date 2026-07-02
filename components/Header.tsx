"use client";

import { useEffect, useState } from "react";
import CodeGlyph from "./CodeGlyph";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [theme, setTheme] = useState<"light" | "ink">("light");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "ink") {
      document.documentElement.setAttribute("data-theme", "ink");
      setTheme("ink");
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = theme === "ink" ? "light" : "ink";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <header className="py-[22px] border-b-2 border-line bg-bg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7">
        <nav className="flex items-center justify-between gap-6">
          <a
            href="#top"
            className="font-bold text-[1.05rem] tracking-[-0.01em] inline-flex items-center gap-[12px]"
          >
            <span className="w-[30px] h-[30px] border-2 border-ink bg-surface shadow-brutal-sm inline-flex items-center justify-center text-ink transition-colors duration-300">
              <CodeGlyph className="w-[17px]" strokeWidth={9} />
            </span>
            Naelly Silva
          </a>

          <ul className="hidden sm:flex gap-7 list-none text-base items-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-ink-2 font-medium py-[6px] transition-colors duration-200 hover:underline hover:decoration-2 hover:underline-offset-[5px] ${
                    activeSection === href.slice(1)
                      ? "underline decoration-2 underline-offset-[5px]"
                      : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="bg-transparent border-2 border-ink text-ink font-mono text-[11px] px-[10px] py-[5px] cursor-pointer whitespace-nowrap transition-colors duration-200 hover:bg-ink hover:text-bg"
              >
                {theme === "ink" ? "☀ Claro" : "☽ Escuro"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
