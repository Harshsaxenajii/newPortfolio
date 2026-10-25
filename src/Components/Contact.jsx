import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, socials } from "../data/portfolio";
import Icon from "./ui/Icon";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { fadeUp, stagger } from "./ui/motion";

const linkedin = socials.find((s) => s.icon === "linkedin");

const channels = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "in/harshsaxenajii",
    href: linkedin.href,
    external: true,
  },
  { icon: "mapPin", label: "Based in", value: "Uttarakhand, India" },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_75%)]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[600px] w-[1000px] max-w-[180vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.18),rgba(45,212,191,0.08)_50%,transparent)]" />
      </div>

      <div className="container-px">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something"
          highlight="reliable, together."
          align="center"
          description="Have a role, a project or an idea? My inbox is always open, and I'll do my best to reply quickly."
        />

        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink-950 shadow-[0_0_50px_-10px_rgba(94,234,212,0.7)] sm:text-base"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-300 via-sky-400 to-violet-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Icon name="mail" className="relative h-[18px] w-[18px]" />
              <span className="relative">Say hello</span>
              <Icon
                name="arrowUpRight"
                className="relative h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="relative inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-teal-300/50 hover:bg-teal-300/[0.06] sm:text-base"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className={copied ? "text-emerald-300" : ""}
                >
                  <Icon name={copied ? "check" : "copy"} className="h-[18px] w-[18px]" />
                </motion.span>
              </AnimatePresence>
              <span aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</span>
            </button>
          </Magnetic>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.08, 0.1)}
          className="mx-auto mt-16 grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4"
        >
          {channels.map((c) => {
            const content = (
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-200 transition-colors duration-500 group-hover/card:border-teal-300/40">
                  <Icon name={c.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{c.label}</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-white">{c.value}</p>
                </div>
              </div>
            );
            return (
              <motion.div key={c.label} variants={fadeUp}>
                {c.href ? (
                  <SpotlightCard
                    as="a"
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="block h-full"
                  >
                    {content}
                  </SpotlightCard>
                ) : (
                  <SpotlightCard className="h-full">{content}</SpotlightCard>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
