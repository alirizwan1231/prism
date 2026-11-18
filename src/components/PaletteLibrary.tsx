"use client";

import React from "react";
import Reveal from "./Reveal";
import { SectionHead } from "./Sections";
import { IconCheck } from "./icons";
import { useTheme } from "../lib/theme";
import type { Palette } from "../data/palettes";

function PaletteCard({
  p,
  index,
  active,
  onPick,
}: {
  p: Palette;
  index: number;
  active: boolean;
  onPick: (id: string) => void;
}) {
  const t = p.tokens;
  const swatches = [t.bg, t.surface, t.surface2, t.accent, t.accent2];

  return (
    <Reveal delay={(index % 4) * 70} className="h-full">
      <button
        type="button"
        onClick={() => onPick(p.id)}
        aria-pressed={active}
        aria-label={`Apply the ${p.name} palette to the whole site`}
        className={`group relative block h-full w-full overflow-hidden rounded-[22px] border text-left shadow-card transition-transform duration-300 hover:-translate-y-1.5 ${
          active ? "palette-active border-transparent" : ""
        }`}
        style={{ background: t.bg, color: t.ink, borderColor: active ? "transparent" : "var(--line)" }}
      >
        {/* swatch strip — the palette's own colours */}
        <span className="flex h-16 w-full sm:h-[4.5rem]">
          {swatches.map((c, i) => (
            <span key={i} className="h-full flex-1" style={{ background: c }} />
          ))}
        </span>

        <span className="block p-4">
          <span className="flex items-start justify-between gap-2">
            <span>
              <span className="block font-display text-lg uppercase leading-tight tracking-wide">
                {p.name}
              </span>
              <span className="mt-0.5 block text-xs" style={{ color: t.muted }}>
                {p.mood}
              </span>
            </span>
            <span
              className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em]"
              style={{
                background: t.surface2,
                color: t.muted,
                border: `1px solid ${t.muted}44`,
              }}
            >
              {p.dark ? "Dark" : "Light"}
            </span>
          </span>

          <span className="mt-3.5 flex items-center justify-between gap-2">
            <span className="flex gap-1">
              {[t.accent, t.accent2, t.ink].map((c, i) => (
                <span
                  key={i}
                  className="h-4 w-4 rounded-full border"
                  style={{ background: c, borderColor: `${t.muted}55` }}
                />
              ))}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: t.muted }}>
              {t.accent}
            </span>
          </span>
        </span>

        {active && (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-onaccent shadow-pop">
            <IconCheck className="h-3.5 w-3.5" />
            Active
          </span>
        )}
      </button>
    </Reveal>
  );
}

export default function PaletteLibrary() {
  const { palette, setPalette, palettes } = useTheme();

  return (
    <section id="palettes" className="grid-bg relative scroll-mt-24 border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker="The Palette Library"
            title={
              <>
                One site. <span className="text-accent">Twenty moods.</span>
              </>
            }
            sub="Tap any palette — the whole studio repaints: backgrounds, type, buttons, charts, footer. Nothing here is a screenshot; every colour is live."
          />
          <Reveal delay={200}>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card">
              <span className="flex overflow-hidden rounded-lg">
                <span className="h-8 w-3.5" style={{ background: palette.tokens.accent }} />
                <span className="h-8 w-3.5" style={{ background: palette.tokens.accent2 }} />
                <span className="h-8 w-3.5" style={{ background: palette.tokens.surface2 }} />
              </span>
              <span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                  Currently live
                </span>
                <span className="block font-display text-lg uppercase tracking-wide text-ink">
                  {palette.name}
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {palettes.map((p, i) => (
            <PaletteCard
              key={p.id}
              p={p}
              index={i}
              active={p.id === palette.id}
              onPick={setPalette}
            />
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Your pick is remembered — come back any time and the studio is still wearing it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
