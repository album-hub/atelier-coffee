"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf8f1]/90 backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between">
        <Link href="/" className="display text-[1.5rem] font-semibold tracking-[-.03em]" onClick={() => setOpen(false)}>
          ATELIER <span className="text-[#b65537]">COFFEE</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-xs font-bold uppercase tracking-[.16em] transition hover:text-[#b65537] ${pathname === link.href ? "text-[#b65537]" : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-1 block h-px w-6 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`absolute bottom-1 left-0 block h-px w-6 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/10 bg-[#fbf8f1] px-4 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="container-shell grid gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="display border-b border-black/10 py-3 text-3xl">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
