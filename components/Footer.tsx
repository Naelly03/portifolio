export default function Footer() {
  return (
    <footer className="py-[22px] border-t-2 border-line text-[0.85rem] text-muted">
      <div className="max-w-[1180px] mx-auto px-[10%] max-[900px]:px-7 flex justify-between flex-wrap gap-3 items-center w-full">
        <span>© 2026 Naelly Silva</span>
        <span>Construído com Next.js & ☕</span>
        <a href="#top" className="underline underline-offset-4">
          Topo ↑
        </a>
      </div>
    </footer>
  );
}