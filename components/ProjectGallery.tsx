"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  title: string;
  cover: string;
  images: GalleryImage[];
};

const iconBtn =
  "bg-bg border-2 border-ink text-ink font-mono text-[13px] leading-none w-9 h-9 inline-flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-ink hover:text-bg";

export default function ProjectGallery({ title, cover, images }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = images[index];

  const open = (i: number) => {
    setIndex(i);
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  function onKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={`Abrir galeria de ${title} (${total} fotos)`}
        className="group relative block w-full aspect-[4/3] border-b-2 border-ink overflow-hidden bg-bg cursor-zoom-in"
      >
        <Image
          src={cover}
          alt={title}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span className="absolute bottom-3 right-3 font-mono text-[11px] px-2 py-[3px] border-2 border-ink bg-bg text-ink shadow-brutal-sm">
          ▣ {total} fotos
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onKeyDown={onKeyDown}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label={`Galeria de ${title}`}
        className="fixed inset-0 m-auto p-0 w-[min(1000px,94vw)] h-fit max-h-[94vh] max-w-none bg-surface text-ink border-2 border-ink shadow-brutal open:flex flex-col backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 border-b-2 border-ink">
          <h3 className="font-bold text-[1rem] leading-tight">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-muted">
              {index + 1}/{total}
            </span>
            <button type="button" onClick={close} aria-label="Fechar galeria" className={iconBtn}>
              ✕
            </button>
          </div>
        </div>

        <div className="relative bg-bg h-[min(56vh,520px)] border-b-2 border-ink">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1000px) 94vw, 1000px"
            className="object-contain"
          />
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Foto anterior"
                className={`${iconBtn} absolute left-3 top-1/2 -translate-y-1/2 shadow-brutal-sm`}
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima foto"
                className={`${iconBtn} absolute right-3 top-1/2 -translate-y-1/2 shadow-brutal-sm`}
              >
                →
              </button>
            </>
          )}
        </div>

        {current.caption && (
          <p className="px-4 pt-3 text-[0.9rem] text-ink-2">{current.caption}</p>
        )}

        {total > 1 && (
          <ul className="list-none flex gap-2 p-4 overflow-x-auto">
            {images.map((img, i) => (
              <li key={img.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === index}
                  className={`relative block w-[96px] h-[54px] border-2 border-ink overflow-hidden cursor-pointer bg-bg transition-opacity duration-200 ${
                    i === index ? "opacity-100 shadow-brutal-sm" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </dialog>
    </>
  );
}
