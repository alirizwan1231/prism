/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        onaccent: "var(--on-accent)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["Anton", "'Archivo Black'", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 18px 44px var(--shadow)",
        lift: "0 26px 60px var(--shadow)",
        pop: "0 14px 38px var(--shadow-accent)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        barGrow: {
          "0%": { transform: "scaleY(0.25)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        floatySlow: "floaty 9s ease-in-out infinite",
        spinslow: "spinSlow 22s linear infinite",
        bargrow: "barGrow 1.1s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
