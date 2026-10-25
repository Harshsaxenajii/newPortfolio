import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile, socials } from "../data/portfolio";
import Icon from "./ui/Icon";
import Magnetic from "./ui/Magnetic";
import RichText from "./ui/RichText";
import { scrollToId } from "./ui/hooks";
import { EASE, fadeUp, stagger } from "./ui/motion";

const GRADIENT = "linear-gradient(90deg, #5eead4, #38bdf8, #a78bfa)";

const charVariant = {
  hidden: { y: "110%", rotate: 6 },
  show: { y: "0%", rotate: 0, transition: { duration: 1, ease: EASE } },
};

function SplitChars({ text, gradient = false }) {
  const chars = text.split("");
  return (
    <motion.span variants={stagger(0.045)} className="inline-flex overflow-hidden pb-[0.06em]">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          className="inline-block origin-bottom-left"
          style={
            gradient
              ? {
                  backgroundImage: GRADIENT,
                  backgroundSize: `${chars.length * 100}% 100%`,
                  backgroundPosition: `${(i / (chars.length - 1)) * 100}% 0`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }
              : undefined
          }
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function RotatingWords({ words, run }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!run) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(timer);
  }, [run, words.length]);

  return (
    <span className="relative inline-flex h-[1.35em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="text-gradient whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const code = [
  [["k", "const "], ["v", "harsh"], ["p", " = {"]],
  [["key", "  role"], ["p", ": "], ["s", '"Research Staff @ BEL"'], ["p", ","]],
  [["key", "  experience"], ["p", ": "], ["s", '"3+ years"'], ["p", ","]],
  [["key", "  focus"], ["p", ": ["], ["s", '"sensors"'], ["p", ", "], ["s", '"microservices"'], ["p", "],"]],
  [["key", "  stack"], ["p", ": ["], ["s", '"React"'], ["p", ", "], ["s", '"Node"'], ["p", ", "], ["s", '"Docker"'], ["p", "],"]],
  [["key", "  uptime"], ["p", ": "], ["n", "99.9"], ["p", ","], ["c", " // percent"]],
  [["key", "  alertLatency"], ["p", ": "], ["s", '"<50ms"'], ["p", ","]],
  [["key", "  openToWork"], ["p", ": "], ["b", "true"], ["p", ","]],
  [["p", "};"]],
  [],
  [["k", "export default "], ["v", "harsh"], ["p", ";"]],
];

const tokenClass = {
  k: "text-violet-400",
  v: "text-sky-300",
  key: "text-slate-200",
  p: "text-slate-500",
  s: "text-teal-300",
  n: "text-amber-300",
  b: "text-orange-300",
  c: "italic text-slate-600",
};

function CodeCard({ ready }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 140, damping: 16 });
  const springY = useSpring(rotateY, { stiffness: 140, damping: 16 });

  const handleMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(-py * 12);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.1, ease: EASE, delay: 0.55 }}
      className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto"
    >
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX: springX, rotateY: springY, transformPerspective: 1100 }}
        className="relative"
      >
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-sky-500/10 to-violet-500/25 blur-2xl" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/60 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">harsh.ts</span>
              <span className="ml-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                live
              </span>
            </div>
          </div>

          <motion.pre
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={stagger(0.08, 0.9)}
            className="overflow-hidden px-3 pb-14 pt-5 font-mono text-[11px] leading-[1.9] sm:px-5 sm:text-[13px]"
          >
            {code.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                className="flex whitespace-pre"
              >
                <span className="mr-3 inline-block w-5 select-none text-right text-slate-700 sm:mr-4">
                  {i + 1}
                </span>
                <span>
                  {line.map(([type, value], j) => (
                    <span key={j} className={tokenClass[type]}>
                      {value}
                    </span>
                  ))}
                  {i === code.length - 1 && (
                    <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-blink bg-teal-300" />
                  )}
                </span>
              </motion.div>
            ))}
          </motion.pre>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 1.6 }}
          className="absolute -right-2 -top-8 sm:-right-6"
        >
          <div className="glass flex animate-float items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/40">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <Icon name="activity" className="h-[18px] w-[18px]" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-white">99.9%</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">uptime</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 1.8 }}
          className="absolute -bottom-6 -left-2 sm:-left-8"
        >
          <div className="glass flex animate-float-delayed items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/40">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-400/15 text-violet-300">
              <Icon name="zap" className="h-[18px] w-[18px]" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-white">&lt;50ms</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">alert latency</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-16"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-bg mask-radial absolute inset-0" />
        <div className="absolute left-1/2 top-[-15%] h-[560px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.16),transparent)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-px grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
      >
        <motion.div initial="hidden" animate={ready ? "show" : "hidden"} variants={stagger(0.1, 0.35)}>
          <motion.div
            variants={fadeUp}
            className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2.5 pr-4 text-xs text-slate-300 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">
              Currently at <span className="font-medium text-white">{profile.company}</span>
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-[clamp(3.25rem,12vw,7.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="block">
              <SplitChars text="Harsh" />
            </span>
            <span aria-hidden="true" className="block">
              <SplitChars text="Saxena" gradient />
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-display text-xl font-medium text-slate-300 sm:text-2xl"
          >
            I engineer <br className="sm:hidden" />
            <RotatingWords words={profile.rotatingWords} run={ready} />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base"
          >
            <RichText text={profile.intro} strongClassName="font-medium text-white" />
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Magnetic>
              <a
                href="#projects"
                onClick={go("projects")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(94,234,212,0.6)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative">View my work</span>
                <Icon
                  name="arrowRight"
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-teal-300/50 hover:bg-teal-300/[0.06]"
              >
                <Icon
                  name="download"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Download résumé
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Find me</span>
            <span className="h-px w-8 bg-white/15" />
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:text-white"
                >
                  <Icon name={s.icon} className="h-[17px] w-[17px]" />
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:text-white"
              >
                <Icon name="mail" className="h-[17px] w-[17px]" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <CodeCard ready={ready} />
      </motion.div>

      <motion.a
        href="#about"
        onClick={go("about")}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-white md:flex"
        aria-label="Scroll to About"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-current pt-2">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-current" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </motion.a>
    </section>
  );
}

export default Hero;
