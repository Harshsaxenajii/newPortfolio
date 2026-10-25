import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Icon from "./ui/Icon";
import { scrollToId } from "./ui/hooks";

// Floating button with a ring that fills as you scroll.
function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollToId("top")}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-ink-900/80 text-slate-200 shadow-lg shadow-black/40 backdrop-blur-md sm:bottom-8 sm:right-8"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <defs>
              <linearGradient id="btt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="url(#btt)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <Icon name="arrowUp" className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
