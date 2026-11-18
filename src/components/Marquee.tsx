import React from "react";
import { marqueeItems } from "../data/content";
import { IconSparkle } from "./icons";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-accent py-3.5" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-display text-lg uppercase tracking-wide text-onaccent"
              >
                <span className="px-5">{item}</span>
                <IconSparkle className="h-4 w-4" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
