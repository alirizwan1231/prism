"use client";

import React from "react";
import Reveal from "./Reveal";
import { serviceIcons, IconArrowUpRight } from "./icons";
import { services, projects } from "../data/content";
import { getPalette, paletteVars } from "../data/palettes";
import type { Palette } from "../data/palettes";

/* ---------- shared section heading ---------- */
export function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
          <span className="h-px w-10 bg-accent" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-4xl uppercase leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Services ---------- */
export function Services() {
  return (
    <section id="studio" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="The Studio"
          title={
            <>
              Everything a brand needs,{" "}
              <span className="text-accent">in-house.</span>
            </>
          }
          sub="Six disciplines, one team, one design system. Every engagement below is delivered against the same tokens that theme this page."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon] ?? serviceIcons.prism;
            return (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-line bg-surface p-7 shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent2 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface2 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{s.desc}</p>
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Work tile motif (pure CSS/SVG art, painted by the tile palette) ---------- */
function Motif({ kind }: { kind: string }) {
  if (kind === "rings") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
        <circle cx="150" cy="20" r="52" fill="none" stroke="var(--accent)" strokeWidth="10" opacity="0.9" />
        <circle cx="150" cy="20" r="30" fill="none" stroke="var(--accent2)" strokeWidth="7" />
        <circle cx="150" cy="20" r="12" fill="var(--accent)" />
        <rect x="14" y="78" width="86" height="9" rx="4.5" fill="var(--ink)" opacity="0.85" />
        <rect x="14" y="95" width="58" height="9" rx="4.5" fill="var(--muted)" opacity="0.7" />
      </svg>
    );
  }
  if (kind === "bars") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
        {[26, 48, 38, 66, 54, 84, 70, 96].map((h, i) => (
          <rect
            key={i}
            x={14 + i * 22}
            y={108 - h}
            width="13"
            height={h}
            rx="4"
            fill={i % 2 ? "var(--accent2)" : "var(--accent)"}
            opacity={0.55 + (h / 100) * 0.45}
          />
        ))}
      </svg>
    );
  }
  if (kind === "orb") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`orb-${kind}`} cx="0.35" cy="0.3" r="0.9">
            <stop offset="0%" stopColor="var(--accent2)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </radialGradient>
        </defs>
        <circle cx="146" cy="52" r="40" fill={`url(#orb-${kind})`} />
        <circle cx="52" cy="88" r="16" fill="var(--accent2)" opacity="0.75" />
        <rect x="14" y="18" width="70" height="9" rx="4.5" fill="var(--ink)" opacity="0.85" />
        <rect x="14" y="35" width="46" height="9" rx="4.5" fill="var(--muted)" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <path d="M14 100 L74 100 L74 74 L128 74 L128 48 L186 48" fill="none" stroke="var(--accent)" strokeWidth="9" strokeLinecap="round" />
      <path d="M14 112 L186 112" stroke="var(--accent2)" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      <circle cx="186" cy="34" r="9" fill="var(--accent2)" />
      <rect x="14" y="16" width="62" height="9" rx="4.5" fill="var(--ink)" opacity="0.85" />
    </svg>
  );
}

/* ---------- Selected Work: each tile carries its OWN fixed mini-theme ---------- */
export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 border-t border-line bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="Selected Work"
          title={
            <>
              Proof we speak <span className="text-outline-accent">fluent colour.</span>
            </>
          }
          sub="Every project tile below is painted with a different palette from the library — the range is the portfolio."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => {
            const p: Palette = getPalette(proj.paletteId);
            return (
              <Reveal key={proj.title} delay={(i % 2) * 100}>
                <article
                  className="group overflow-hidden rounded-[26px] border shadow-card"
                  style={
                    {
                      ...paletteVars(p),
                      background: "var(--surface)",
                      borderColor: "var(--line)",
                      color: "var(--ink)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="relative h-52 overflow-hidden sm:h-60"
                    style={{ background: "var(--bg)" }}
                  >
                    <div className="absolute inset-0 grid-bg opacity-70" />
                    <div className="absolute inset-0 p-5 transition-transform duration-500 group-hover:scale-[1.04]">
                      <Motif kind={proj.motif} />
                    </div>
                    <span
                      className="absolute right-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-wide" style={{ color: "var(--ink)" }}>
                        {proj.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed" style={{ color: "var(--muted)" }}>
                        {proj.blurb}
                      </p>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
                        {proj.category}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-3">
                      <span className="font-mono text-sm" style={{ color: "var(--muted)" }}>
                        {proj.year}
                      </span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ borderColor: "var(--line)", color: "var(--accent)" }}
                      >
                        <IconArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
