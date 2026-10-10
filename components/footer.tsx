import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1e1b18] py-12 text-[#f4efe5]">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]">
        <div>
          <p className="display text-3xl">ATELIER COFFEE</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">A fictional specialty coffee concept designed as a portfolio case study. No real shop, customer, or commercial claim is represented.</p>
        </div>
        <div className="text-sm leading-8 text-white/70">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-white">Explore</p>
          <Link href="/about" className="block hover:text-[#d6a950]">Our story</Link>
          <Link href="/menu" className="block hover:text-[#d6a950]">Seasonal menu</Link>
          <Link href="/contact" className="block hover:text-[#d6a950]">Contact demo</Link>
        </div>
        <div className="text-sm leading-8 text-white/70">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-white">Project</p>
          <p>Brand concept · 2026</p>
          <p>Original art direction</p>
          <p>Demo website</p>
        </div>
      </div>
      <div className="container-shell mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[.68rem] font-semibold uppercase tracking-[.14em] text-white/40 sm:flex-row sm:justify-between">
        <p>© 2026 Atelier Coffee concept</p><p>Designed for a thoughtful pause</p>
      </div>
    </footer>
  );
}
