"use client";

import React, { useEffect, useState } from "react";
import { PrismMark } from "./icons";
import { useTheme } from "../lib/theme";

const links = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Palettes", href: "#palettes" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const { palette } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "color-mix(in srgb, var(--bg) 78%, transparent)",
        borderColor: scrolled ? "var(--line)" : "transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <PrismMark className="h-8 w-8" />
          <span className="font-display text-xl tracking-wide text-ink">
            PRISM
            <span className="text-accent">.</span>
          </span>
          <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted md:block">
            Design Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted lg:flex">
            <span className="flex overflow-hidden rounded-full">
              <span className="h-3.5 w-2" style={{ background: palette.tokens.accent }} />
              <span className="h-3.5 w-2" style={{ background: palette.tokens.accent2 }} />
            </span>
            {palette.name}
          </span>
          <a
            href="#pricing"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent shadow-pop transition-transform duration-300 hover:-translate-y-0.5 sm:block"
          >
            Start a project
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 8 H20 M4 16 H20" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 font-display text-lg tracking-wide text-ink hover:bg-surface2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-accent px-3 py-3 text-center font-semibold text-onaccent"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
}
