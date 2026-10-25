import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "./ui/hooks";

// Fixed ambient background: drifting aurora glows + grain texture.
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[20%] -top-[20%] h-[70vmax] w-[70vmax] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.12),transparent)]" />
      <div
        className="absolute -right-[25%] top-[10%] h-[65vmax] w-[65vmax] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent)]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute -bottom-[30%] left-[20%] h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.08),transparent)]"
        style={{ animationDelay: "-13s" }}
      />
      <div className="noise absolute inset-0 opacity-[0.05]" />
    </div>
  );
}

// Thin gradient bar at the top that tracks page scroll.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400"
    />
  );
}

// Trailing ring + soft spotlight that follow the mouse (mouse/trackpad only).
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useReducedMotion();
  const enabled = finePointer && !reduceMotion;

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });
  const [hovering, setHovering] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(56,189,248,0.06), transparent 45%)`;

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(Boolean(e.target.closest?.("a, button, [data-cursor]")));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: spotlight }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-teal-200/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? "rgba(153,246,228,0.12)" : "rgba(153,246,228,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
