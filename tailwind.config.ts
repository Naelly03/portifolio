import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: ["selector", '[data-theme="ink"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "Menlo", "monospace"],
      },
      boxShadow: {
        brutal: "var(--shadow)",
        "brutal-sm": "var(--shadow-sm)",
      },
    },
  },
  plugins: [],
};

export default config;