import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { profile } from "../data/portfolio";
import { EASE, EASE_IN_OUT } from "./ui/motion";

// Full-screen intro: counts to 100, then the curtain slides up.
function Preloader({ onComplete }) {
  const progress = useMotionValue(0);
  const count = useTransform(progress, (v) => Math.round(v).toString().padStart(3, "0"));
  const barScale = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const controls = animate(progress, 100, {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setTimeout(onComplete, 200),
    });
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink-950 px-5 py-6 sm:px-10 sm:py-8"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: EASE_IN_OUT }}
    >
      <div className="grid-bg mask-radial pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
        <span>Portfolio · {new Date().getFullYear()}</span>
        <span className="hidden sm:inline">{profile.location.split(",")[0]}</span>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,10vw,8rem)] font-bold leading-none tracking-tight text-white"
          >
            {profile.name.split(" ")[0]}
            <span className="text-gradient">.</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm"
          >
            Software Engineer · Real-time Systems
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Loading experience
          </span>
          <motion.span className="font-display text-6xl font-bold tabular-nums leading-none text-white sm:text-8xl">
            {count}
          </motion.span>
        </div>
        <div className="mt-5 h-px w-full bg-white/10">
          <motion.div
            style={{ scaleX: barScale }}
            className="h-full origin-left bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
