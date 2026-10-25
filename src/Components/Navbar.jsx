import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, profile, socials } from "../data/portfolio";
import Icon from "./ui/Icon";
import { scrollToId, useActiveSection } from "./ui/hooks";
import { EASE, EASE_IN_OUT } from "./ui/motion";

const sectionIds = ["top", ...navLinks.map((l) => l.id)];

function Logo({ onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl"
      aria-label={`${profile.name}, back to top`}
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-ink-900">
        <span className="absolute inset-0 bg-gradient-to-br from-teal-300/25 via-transparent to-violet-400/25 transition-opacity duration-500 group-hover:opacity-0" />
        <span className="absolute inset-0 bg-gradient-to-br from-teal-300 via-sky-400 to-violet-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative font-display text-sm font-bold text-white transition-colors duration-500 group-hover:text-ink-950">
          {profile.initials}
        </span>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-[15px] font-semibold text-white">{profile.name}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Software Engineer
        </span>
      </span>
    </a>
  );
}

function Navbar({ ready }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 320);
  });

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    if (open) {
      setOpen(false);
      setTimeout(() => scrollToId(id), 60);
    } else {
      scrollToId(id);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={ready ? { y: hidden && !open ? -110 : 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: ready && !scrolled ? 0.5 : 0 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-px pt-3 sm:pt-4">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-2xl border px-2.5 py-2 transition-all duration-500 sm:px-3 ${
              scrolled || open
                ? "border-white/10 bg-ink-950/70 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Logo onClick={go("top")} />

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={go(link.id)}
                    className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-transparent sm:inline-flex"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400 transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-ink-950">Résumé</span>
                <Icon
                  name="arrowUpRight"
                  className="relative h-4 w-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-ink-950"
                />
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
              >
                <motion.span
                  className="absolute h-[1.5px] w-5 rounded bg-white"
                  animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
                <motion.span
                  className="absolute h-[1.5px] w-5 rounded bg-white"
                  animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink-950/95 px-5 pb-8 pt-28 backdrop-blur-xl sm:px-8 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: EASE_IN_OUT }}
          >
            <div className="grid-bg mask-radial pointer-events-none absolute inset-0 opacity-50" />
            <motion.ul
              className="relative flex flex-col gap-1"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              }}
            >
              {navLinks.map((link, i) => (
                <li key={link.id} className="overflow-hidden">
                  <motion.a
                    href={`#${link.id}`}
                    onClick={go(link.id)}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      show: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: EASE } },
                    }}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="font-mono text-xs text-teal-300">0{i + 1}</span>
                    <span
                      className={`font-display text-4xl font-semibold tracking-tight transition-colors sm:text-5xl ${
                        active === link.id ? "text-gradient" : "text-white group-hover:text-teal-200"
                      }`}
                    >
                      {link.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.6, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative mt-auto space-y-6 pt-10"
            >
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950"
              >
                <Icon name="download" className="h-4 w-4" />
                Download résumé
              </a>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Say hello</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block break-all text-lg text-white">
                  {profile.email}
                </a>
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-teal-300/50 hover:text-white"
                  >
                    <Icon name={s.icon} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
