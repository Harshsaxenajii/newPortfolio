import React from "react";
import { marqueeTech } from "../data/portfolio";
import Marquee from "./ui/Marquee";

function TechMarquee() {
  return (
    <section aria-label="Technologies" className="relative border-y border-white/[0.06] bg-ink-900/40 py-5 sm:py-6">
      <Marquee
        items={marqueeTech}
        duration={45}
        renderItem={(tech) => (
          <span className="flex items-center gap-6 px-3 font-display text-lg font-medium text-slate-500 transition-colors hover:text-white sm:gap-8 sm:px-4 sm:text-2xl">
            {tech}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-teal-300/70" aria-hidden="true">
              <path fill="currentColor" d="M12 0 14.6 9.4 24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6Z" />
            </svg>
          </span>
        )}
      />
    </section>
  );
}

export default TechMarquee;
