"use client";

import React from "react";
import { useTheme } from "../lib/theme";
import { IconPalette } from "./icons";

export default function PaletteDock() {
  const { palette, setPalette, palettes } = useTheme();
  const quick = palettes.slice(0, 8);

  const goToLibrary = () => {
    document
      .getElementById("palettes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-3 sm:bottom-6">
      <div className="pointer-events-auto flex max-w-[96vw] items-center gap-2 overflow-x-auto rounded-full border border-line bg-surface/90 py-2 pl-3 pr-2 shadow-lift backdrop-blur-xl sm:gap-2.5 sm:pl-4">
        <span className="hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted md:flex">
          <IconPalette className="h-4 w-4 text-accent" />
          Theme
        </span>

        <span className="hidden h-6 w-px shrink-0 bg-line md:block" />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {quick.map((p) => {
            const active = p.id === palette.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPalette(p.id)}
                title={`${p.name} — ${p.mood}`}
                aria-label={`Apply ${p.name} palette`}
                aria-pressed={active}
                className="h-8 w-8 shrink-0 rounded-full transition-transform duration-300 hover:scale-110"
                style={{
                  background: `conic-gradient(from 210deg, ${p.tokens.accent} 0 50%, ${p.tokens.accent2} 50% 78%, ${p.tokens.bg} 78% 100%)`,
                  boxShadow: active
                    ? `0 0 0 2px var(--surface), 0 0 0 4.5px var(--accent)`
                    : `inset 0 0 0 1px rgba(127,127,127,0.35)`,
                  transform: active ? "scale(1.12)" : undefined,
                }}
              />
            );
          })}
        </div>

        <span className="hidden max-w-[110px] shrink-0 truncate text-xs font-medium text-ink lg:block">
          {palette.name}
        </span>

        <button
          type="button"
          onClick={goToLibrary}
          className="shrink-0 whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-onaccent transition-transform duration-300 hover:-translate-y-0.5"
        >
          All 20 palettes
        </button>
      </div>
    </div>
  );
}
