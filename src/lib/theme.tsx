"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Palette,
  defaultPalette,
  getPalette,
  paletteVars,
  palettes,
} from "../data/palettes";

const STORAGE_KEY = "prism-palette";

type ThemeCtx = {
  palette: Palette;
  setPalette: (id: string) => void;
  palettes: Palette[];
};

const Ctx = createContext<ThemeCtx>({
  palette: defaultPalette,
  setPalette: () => {},
  palettes,
});

export const useTheme = () => useContext(Ctx);

function applyVars(p: Palette) {
  const root = document.documentElement;
  const vars = paletteVars(p);
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.dataset.theme = p.id;
  root.dataset.mode = p.dark ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", p.tokens.bg);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [palette, setPaletteState] = useState<Palette>(defaultPalette);
  const [wash, setWash] = useState<{ key: number; color: string; color2: string } | null>(null);
  const [toast, setToast] = useState<{ key: number; name: string; mood: string } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const washTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore the saved palette on mount (the inline boot script in <head>
  // already painted it, so this just syncs React state — silently).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && saved !== defaultPalette.id) {
        const p = getPalette(saved);
        applyVars(p);
        setPaletteState(p);
      }
    } catch {
      /* storage unavailable — default palette stands */
    }
  }, []);

  const setPalette = useCallback((id: string) => {
    const p = getPalette(id);
    applyVars(p);
    setPaletteState(p);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
    // Colour-wash sweep in the NEW palette's colours.
    if (washTimer.current) clearTimeout(washTimer.current);
    setWash({ key: Date.now(), color: p.tokens.accent, color2: p.tokens.accent2 });
    washTimer.current = setTimeout(() => setWash(null), 950);
    // "Now showing" toast.
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ key: Date.now(), name: p.name, mood: p.mood });
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  return (
    <Ctx.Provider value={{ palette, setPalette, palettes }}>
      {children}

      {/* Full-screen colour-wash sweep on every switch */}
      {wash && (
        <div
          key={wash.key}
          aria-hidden
          className="wash-sweep"
          style={{
            background: `linear-gradient(105deg, transparent 0%, ${wash.color} 38%, ${wash.color2} 62%, transparent 100%)`,
          }}
        />
      )}

      {/* Now-showing toast */}
      {toast && (
        <div
          key={toast.key}
          role="status"
          className="toast-pop fixed left-1/2 top-[4.75rem] z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full border border-line bg-surface py-2 pl-3 pr-5 shadow-lift"
        >
          <span className="flex overflow-hidden rounded-full">
            <span className="h-5 w-2.5" style={{ background: palette.tokens.accent }} />
            <span className="h-5 w-2.5" style={{ background: palette.tokens.accent2 }} />
            <span className="h-5 w-2.5" style={{ background: palette.tokens.bg }} />
          </span>
          <span className="whitespace-nowrap text-sm text-ink">
            Now showing: <strong className="font-semibold">{toast.name}</strong>
            <span className="text-muted"> — {toast.mood}</span>
          </span>
        </div>
      )}
    </Ctx.Provider>
  );
}
