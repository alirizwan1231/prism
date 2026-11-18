"use client";

import React from "react";
import Reveal from "./Reveal";
import { IconArrowRight, IconArrowUpRight, IconPalette } from "./icons";
import { useTheme } from "../lib/theme";
import { stats } from "../data/content";

/** Abstract composition painted entirely from the ACTIVE palette — it
    visibly repaints the moment a new palette is chosen. */
function ThemePreview() {
  const { palette } = useTheme();
  const t = palette.tokens;
  const bars = [62, 88, 45, 74, 96, 58, 82];

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[48px] opacity-40 blur-3xl"
        style={{
          background: `linear-gradient(130deg, ${t.accent} 0%, transparent 45%, ${t.accent2} 100%)`,
        }}
      />

      {/* main board */}
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface shadow-lift">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent2" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface2" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Live theme — {palette.name}
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-[1.25fr_1fr]">
          {/* headline block */}
          <div className="rounded-2xl bg-surface2 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
              Brand board / 01
            </p>
            <p className="mt-3 font-display text-[26px] leading-[1.02] text-ink">
              COLOUR IS
              <br />
              <span className="text-accent">THE CONCEPT</span>
            </p>
            <div className="mt-4 flex gap-1.5">
              {[t.bg, t.surface, t.surface2, t.muted, t.accent, t.accent2].map((c, i) => (
                <span
                  key={i}
                  className="h-6 flex-1 rounded-md border border-line"
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-muted">
              {t.accent} · {t.accent2}
            </p>
          </div>

          {/* chart block */}
          <div className="flex flex-col rounded-2xl bg-surface2 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
              Brand recall
            </p>
            <div className="mt-auto flex h-24 items-end gap-1.5 pt-3">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 origin-bottom animate-bargrow rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background: i % 2 ? "var(--accent2)" : "var(--accent)",
                    animationDelay: `${i * 90}ms`,
                    opacity: 0.55 + (h / 100) * 0.45,
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-[11px] font-medium text-ink">
              +212% <span className="text-muted">after rebrand</span>
            </p>
          </div>
        </div>

        {/* prism strip */}
        <div className="flex items-center gap-4 px-5 pb-5">
          <svg viewBox="0 0 120 44" className="h-11 w-[120px] shrink-0" aria-hidden>
            <defs>
              <linearGradient id="hero-prism" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent2)" />
              </linearGradient>
            </defs>
            <path d="M26 6 L46 38 L6 38 Z" fill="none" stroke="url(#hero-prism)" strokeWidth="2.6" strokeLinejoin="round" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 16 L112 6 M44 22 L114 22 M44 28 L112 38" stroke="url(#hero-prism)" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <p className="text-xs leading-relaxed text-muted">
            One prism, twenty spectrums. This board — and the whole page behind
            it — is painted by the palette you pick.
          </p>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-3 top-16 hidden animate-floaty rounded-2xl border border-line bg-surface px-4 py-3 shadow-card sm:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Mode</p>
        <p className="font-display text-base tracking-wide text-ink">
          {palette.dark ? "DARK" : "LIGHT"}
        </p>
      </div>
      <div className="absolute -right-3 bottom-14 hidden animate-floatySlow rounded-2xl bg-accent px-4 py-3 shadow-pop sm:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-onaccent opacity-80">
          Accent
        </p>
        <p className="font-mono text-sm font-bold text-onaccent">{t.accent}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
      {/* accent glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent opacity-[0.13] blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent2 opacity-[0.12] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Brand & web design studio
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display uppercase leading-[0.95] text-ink text-[17vw] sm:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]">
                We design
                <br />
                in <span className="text-outline">every</span>
                <br />
                <span className="text-accent">colour.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                PRISM builds brands and websites with a point of view. And to
                prove colour is a system, not a coat of paint — this entire
                site re-themes live. Pick a palette below and watch the studio
                repaint itself.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#palettes"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-semibold text-onaccent shadow-pop transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <IconPalette className="h-5 w-5" />
                  Try the 20 palettes
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:border-accent"
                >
                  See the work
                  <IconArrowUpRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl text-ink">
                      {s.value}
                      <span className="text-accent">.</span>
                    </dd>
                    <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-4">
            <ThemePreview />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
