"use client";

import React from "react";
import Reveal from "./Reveal";
import { SectionHead } from "./Sections";
import { PrismMark, IconCheck, IconArrowRight } from "./icons";
import { steps, tiers, testimonials } from "../data/content";
import { useTheme } from "../lib/theme";

/* ---------- Process ---------- */
export function Process() {
  return (
    <section className="relative border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="How We Work"
          title={
            <>
              Four steps, <span className="text-accent">no mysteries.</span>
            </>
          }
        />
        <div className="relative mt-14">
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 110}>
                <div className="relative">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent font-display text-lg text-onaccent shadow-pop">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 border-t border-line bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="Pricing"
          title={
            <>
              Honest packages, <span className="text-outline-accent">poster prices.</span>
            </>
          }
          sub="Concept pricing for this demo studio — every package includes the full palette system, so your brand never ships in the wrong colour again."
        />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 110} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[26px] p-8 ${
                  tier.featured
                    ? "bg-accent text-onaccent shadow-pop lg:-translate-y-3"
                    : "border border-line bg-bg text-ink shadow-card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ink px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-bg">
                    Most booked
                  </span>
                )}
                <h3
                  className={`font-mono text-xs uppercase tracking-[0.26em] ${
                    tier.featured ? "text-onaccent/80" : "text-accent"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-6xl leading-none">{tier.price}</span>
                  <span className={`text-sm ${tier.featured ? "text-onaccent/75" : "text-muted"}`}>
                    {tier.unit}
                  </span>
                </p>
                <p className={`mt-4 leading-relaxed ${tier.featured ? "text-onaccent/85" : "text-muted"}`}>
                  {tier.desc}
                </p>
                <ul className={`mt-7 flex-1 space-y-3 border-t pt-6 ${tier.featured ? "border-onaccent/25" : "border-line"}`}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] font-medium">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.featured ? "bg-onaccent text-accent" : "bg-accent text-onaccent"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
                    tier.featured
                      ? "bg-ink text-bg"
                      : "bg-accent text-onaccent shadow-pop"
                  }`}
                >
                  Book {tier.name}
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  return (
    <section className="relative border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="Kind Words"
          title={
            <>
              Clients, in <span className="text-accent">full colour.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((tst, i) => (
            <Reveal key={tst.name} delay={i * 110} className="h-full">
              <figure className="flex h-full flex-col rounded-[26px] border border-line bg-surface p-7 shadow-card">
                <span aria-hidden className="font-display text-5xl leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed text-ink">
                  {tst.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display text-sm text-onaccent">
                    {tst.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{tst.name}</span>
                    <span className="block text-sm text-muted">{tst.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Big CTA band ---------- */
export function CtaBand() {
  const { palette } = useTheme();
  return (
    <section id="contact" className="relative overflow-hidden bg-accent">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: palette.tokens.accent2 }}
      />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 animate-spinslow opacity-20"
      >
        <path d="M100 14 L186 172 L14 172 Z" fill="none" stroke="var(--on-accent)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M100 70 L142 152 L58 152 Z" fill="var(--on-accent)" opacity="0.5" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-onaccent/75">
            Currently booking — two slots left this quarter
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.98] text-onaccent sm:text-6xl lg:text-7xl">
            Let&rsquo;s make it vivid.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-onaccent/85">
            Tell us where your brand is going. We will bring the colour — all
            twenty shades of it, if that is what it takes.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
              <IconArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#palettes"
              className="inline-flex items-center gap-2 rounded-full border-2 border-onaccent/60 px-8 py-4 font-semibold text-onaccent transition-all duration-300 hover:border-onaccent"
            >
              Repaint this page first
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const { palette, setPalette, palettes } = useTheme();
  return (
    <footer className="border-t border-line bg-surface pb-32 pt-16 sm:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <PrismMark className="h-9 w-9" />
              <span className="font-display text-2xl tracking-wide text-ink">
                PRISM<span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              A brand & web design studio that treats colour as a system. This
              page is the proof: one layout, twenty complete identities, zero
              screenshots.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="flex overflow-hidden rounded-md">
                {[palette.tokens.bg, palette.tokens.surface2, palette.tokens.accent, palette.tokens.accent2, palette.tokens.ink].map(
                  (c, i) => (
                    <span key={i} className="h-6 w-6 border border-line" style={{ background: c }} />
                  )
                )}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Wearing: {palette.name}
              </span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Work", "#work"],
                ["Studio", "#studio"],
                ["Palettes", "#palettes"],
                ["Pricing", "#pricing"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-ink transition-colors hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Quick repaint
            </h3>
            <ul className="mt-4 space-y-2.5">
              {palettes.slice(8, 12).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setPalette(p.id)}
                    className="group flex items-center gap-2.5 text-ink transition-colors hover:text-accent"
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-line"
                      style={{
                        background: `conic-gradient(from 210deg, ${p.tokens.accent} 0 55%, ${p.tokens.accent2} 55% 100%)`,
                      }}
                    />
                    {p.name}
                    {p.id === palette.id && (
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                        live
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 text-sm text-muted sm:flex-row">
          <p>PRISM Studio — a concept experience. Every colour on this page is live.</p>
          <p className="font-mono text-xs uppercase tracking-wider">
            20 palettes · 1 layout · 0 images
          </p>
        </div>
      </div>
    </footer>
  );
}
