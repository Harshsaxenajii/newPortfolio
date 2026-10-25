import React from "react";
import { motion } from "framer-motion";
import Icon from "./ui/Icon";
import { EASE, stagger } from "./ui/motion";

// Illustrative UI mockups for featured projects (no real screenshots available).

const rowVariant = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

function Skeleton({ className = "" }) {
  return <span className={`block rounded-full bg-white/10 ${className}`} />;
}

function Phone({ children, className = "" }) {
  return (
    <div
      className={`relative aspect-[9/19] w-[136px] shrink-0 rounded-[26px] border border-white/15 bg-ink-950 p-[6px] shadow-2xl shadow-black/70 transition-transform duration-700 ease-out sm:w-[164px] sm:rounded-[30px] ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[20px] bg-ink-850 sm:rounded-[24px]">
        <span className="absolute left-1/2 top-1.5 z-10 h-[14px] w-12 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

const tasks = [
  { done: true, w: "w-[85%]", time: "08:00" },
  { done: true, w: "w-[60%]", time: "10:30" },
  { done: false, w: "w-full", time: "13:00" },
  { done: false, w: "w-[70%]", time: "16:00" },
];

export function MobileMockup() {
  return (
    <div className="relative flex h-full min-h-[340px] items-center justify-center overflow-hidden sm:min-h-[420px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(94,234,212,0.18),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(167,139,250,0.22),transparent_55%)]" />
      <div className="grid-bg mask-radial absolute inset-0 opacity-50" />

      <div className="relative flex items-center gap-3 sm:gap-5">
        <Phone className="translate-y-5 -rotate-6 group-hover/card:-translate-y-0 group-hover/card:-rotate-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger(0.12, 0.3)}
            className="flex h-full flex-col gap-2 px-2.5 pb-3 pt-7 sm:px-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[7px] uppercase tracking-widest text-slate-500 sm:text-[8px]">Today</p>
                <p className="font-display text-[11px] font-semibold text-white sm:text-xs">Schedule</p>
              </div>
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-300 to-violet-400" />
            </div>
            {tasks.map((t, i) => (
              <motion.div
                key={i}
                variants={rowVariant}
                className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] p-1.5 sm:p-2"
              >
                <span
                  className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border ${
                    t.done ? "border-teal-300 bg-teal-300 text-ink-950" : "border-white/20"
                  }`}
                >
                  {t.done && <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />}
                </span>
                <span className="min-w-0 flex-1 space-y-1">
                  <Skeleton className={`h-1.5 ${t.w}`} />
                  <Skeleton className="h-1 w-[45%] bg-white/[0.06]" />
                </span>
                <span className="shrink-0 font-mono text-[6px] text-slate-500 sm:text-[7px]">{t.time}</span>
              </motion.div>
            ))}
            <motion.div
              variants={rowVariant}
              className="mt-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-300/20 to-violet-400/20 p-2"
            >
              <Icon name="bell" className="h-3 w-3 shrink-0 text-teal-200" />
              <Skeleton className="h-1.5 w-[70%] bg-white/25" />
            </motion.div>
          </motion.div>
        </Phone>

        <Phone className="-translate-y-5 rotate-6 group-hover/card:translate-y-0 group-hover/card:rotate-3">
          <div className="absolute inset-0">
            <div className="grid-bg absolute inset-0 opacity-70" style={{ backgroundSize: "18px 18px" }} />
            <svg viewBox="0 0 160 300" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
              <path d="M-10 90 C 40 110, 60 60, 170 80" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
              <path d="M30 -10 C 50 120, 120 160, 110 310" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <motion.path
                d="M40 230 C 50 180, 100 170, 95 120 S 70 70, 110 60"
                stroke="url(#route)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              />
              <defs>
                <linearGradient id="route" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5eead4" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute left-[24%] top-[75%] h-2.5 w-2.5 rounded-full border-2 border-white bg-teal-300" />
            <span className="absolute left-[67%] top-[18%] grid place-items-center">
              <span className="absolute h-8 w-8 animate-ping rounded-full bg-violet-400/30" />
              <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-violet-400" />
            </span>
          </div>
          <div className="absolute inset-x-2 bottom-2 rounded-xl border border-white/10 bg-ink-950/90 p-2 backdrop-blur">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-5 w-5 shrink-0 rounded-full sm:h-6 sm:w-6 bg-gradient-to-br from-violet-400 to-sky-400" />
              <span className="min-w-0 flex-1 space-y-1">
                <Skeleton className="h-1.5 w-[90%]" />
                <Skeleton className="h-1 w-[60%] bg-white/[0.06]" />
              </span>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-400/15 px-1.5 py-0.5 font-mono text-[6px] uppercase text-emerald-300 sm:text-[7px]">
                <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                Live
              </span>
            </div>
          </div>
        </Phone>
      </div>
    </div>
  );
}

const bars = [40, 62, 48, 75, 55, 88, 66, 92, 70, 84, 60, 96];

export function DashboardMockup() {
  return (
    <div className="relative flex h-full min-h-[340px] items-center overflow-hidden p-4 sm:min-h-[420px] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_20%_85%,rgba(94,234,212,0.16),transparent_55%)]" />
      <div className="grid-bg mask-radial absolute inset-0 opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 12 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: EASE }}
        style={{ transformPerspective: 1200 }}
        className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-ink-950/90 shadow-2xl shadow-black/60"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 h-3.5 flex-1 rounded-full bg-white/[0.05]" />
        </div>
        <div className="flex">
          <div className="hidden w-24 shrink-0 space-y-2.5 border-r border-white/[0.06] p-3 sm:block">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-md px-1.5 py-1 ${i === 1 ? "bg-teal-300/10" : ""}`}
              >
                <span className={`h-2 w-2 rounded-sm ${i === 1 ? "bg-teal-300" : "bg-white/15"}`} />
                <Skeleton className={`h-1.5 ${i === 1 ? "w-10 bg-teal-300/40" : "w-9"}`} />
              </div>
            ))}
          </div>
          <div className="min-w-0 flex-1 space-y-3 p-3 sm:p-4">
            <div className="flex flex-wrap gap-1.5">
              {["Admin", "Store Manager", "Manager"].map((role, i) => (
                <span
                  key={role}
                  className={`rounded-full border px-2 py-0.5 font-mono text-[8px] sm:text-[9px] ${
                    i === 0 ? "border-teal-300/40 bg-teal-300/10 text-teal-200" : "border-white/10 text-slate-500"
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Leads", tone: "from-teal-300 to-teal-500" },
                { label: "Orders", tone: "from-sky-300 to-sky-500" },
                { label: "Margin", tone: "from-violet-300 to-violet-500" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                  <p className="font-mono text-[7px] uppercase tracking-wider text-slate-500 sm:text-[8px]">{kpi.label}</p>
                  <span className={`mt-1.5 block h-2 w-3/4 rounded-full bg-gradient-to-r ${kpi.tone} opacity-80`} />
                  <span className="mt-1 block h-1 w-1/2 rounded-full bg-white/[0.08]" />
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <Skeleton className="h-1.5 w-16" />
                <span className="font-mono text-[7px] text-slate-500 sm:text-[8px]">Payments</span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={stagger(0.05, 0.5)}
                className="flex h-20 items-end gap-1 sm:h-24 sm:gap-1.5"
              >
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { scaleY: 0 },
                      show: { scaleY: 1, transition: { duration: 0.8, ease: EASE } },
                    }}
                    style={{ height: `${h}%` }}
                    className="flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-teal-400/40 to-sky-300/90"
                  />
                ))}
              </motion.div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[7px] uppercase tracking-wider text-slate-500 sm:text-[8px]">
                  Milestone billing
                </span>
                <span className="font-mono text-[7px] text-teal-300 sm:text-[8px]">2 / 3</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 1, 0.45].map((fill, i) => (
                  <span key={i} className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: fill }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.9 + i * 0.25 }}
                      className="block h-full origin-left rounded-full bg-gradient-to-r from-teal-300 to-violet-400"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
