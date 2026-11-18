import type { Metadata } from "next";
import "./globals.css";
import { palettes, paletteVars } from "../data/palettes";

// Serialise every palette's CSS variables for the pre-paint boot script, so a
// returning visitor's saved palette is applied before first paint (no flash).
const bootMap: Record<string, Record<string, string>> = {};
palettes.forEach((p) => {
  bootMap[p.id] = paletteVars(p);
});
const bootScript = `(function(){try{var id=localStorage.getItem('prism-palette');var P=${JSON.stringify(
  bootMap
)};var v=P[id]||P['volt-night'];var r=document.documentElement;for(var k in v){r.style.setProperty(k,v[k]);}r.dataset.theme=id||'volt-night';}catch(e){}})();`;

export const metadata: Metadata = {
  title: "PRISM — Brand & Web Design Studio in Every Colour",
  description:
    "PRISM is a brand & web design studio concept with a live palette switcher: pick any of 20 curated colour palettes and the entire site repaints instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="volt-night" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0A0F0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
