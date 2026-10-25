import React from "react";
import { motion } from "framer-motion";
import { navLinks, profile, socials } from "../data/portfolio";
import Icon from "./ui/Icon";
import { scrollToId } from "./ui/hooks";
import { EASE } from "./ui/motion";

function Footer() {
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="container-px grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
            {profile.role} at {profile.company}. I build real-time systems and cross-platform apps.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-teal-300 transition-colors hover:text-white"
          >
            <Icon name="mail" className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={go(link.id)}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                  {s.label}
                  <Icon
                    name="arrowUpRight"
                    className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Icon name="download" className="h-4 w-4" />
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px overflow-hidden">
        <motion.p
          aria-hidden="true"
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="text-outline select-none whitespace-nowrap text-center font-display text-[clamp(2.5rem,11.5vw,9rem)] font-bold leading-[0.85] tracking-tighter"
        >
          HARSH SAXENA
        </motion.p>
      </div>

      <div className="container-px">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed & built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
