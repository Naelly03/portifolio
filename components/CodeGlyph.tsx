// Glifo </> desenhado como traços (pontas retas) — mesma marca dos banners do LinkedIn.
// Usa currentColor no stroke, então herda a cor do texto (funciona nos dois temas).

type Props = {
  className?: string;
  strokeWidth?: number;
};

export default function CodeGlyph({ className = "", strokeWidth = 7 }: Props) {
  return (
    <svg
      viewBox="0 0 150 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M55 14 L14 40 L55 66"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M95 14 L136 40 L95 66"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M83 11 L67 69"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
