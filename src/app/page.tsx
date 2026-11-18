import React from "react";
import ThemeProvider from "../lib/theme";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import PaletteLibrary from "../components/PaletteLibrary";
import PaletteDock from "../components/PaletteDock";
import { Services, Work } from "../components/Sections";
import { Process, Pricing, Testimonials, CtaBand, Footer } from "../components/Sections2";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="grain relative min-h-screen bg-bg font-sans text-ink">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Work />
          <PaletteLibrary />
          <Process />
          <Pricing />
          <Testimonials />
          <CtaBand />
        </main>
        <Footer />
        <PaletteDock />
      </div>
    </ThemeProvider>
  );
}
