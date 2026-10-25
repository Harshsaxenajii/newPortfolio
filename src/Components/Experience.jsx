import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "../data/portfolio";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import RichText from "./ui/RichText";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { EASE } from "./ui/motion";

function TimelineDot({ current }) {
  return (
    <motion.span
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-900 sm:h-10 sm:w-10"
    >
      {current && <span className="absolute inset-0 animate-ping rounded-full bg-teal-300/20" />}
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-teal-300 to-violet-400 shadow-[0_0_16px_rgba(94,234,212,0.9)]" />
    </motion.span>
  );
}

function ExperienceItem({ job }) {
  return (
    <li className="relative pl-11 sm:pl-16">
      <TimelineDot current={job.current} />
      <Reveal y={40} amount={0.1}>
        <SpotlightCard innerClassName="p-5 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-teal-300/20 via-sky-400/10 to-violet-400/20 font-display text-xs font-bold tracking-wide text-white sm:h-12 sm:w-12 sm:text-sm">
                {job.badge}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {job.role}
                </h3>
                <p className="text-gradient mt-0.5 font-medium">{job.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
              {job.current && (
                <span className="chip border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Current
                </span>
              )}
              <span className="chip">
                <Icon name="calendar" className="h-3.5 w-3.5 text-teal-300" />
                {job.period}
              </span>
              <span className="chip">
                <Icon name="mapPin" className="h-3.5 w-3.5 text-teal-300" />
                {job.location}
              </span>
            </div>
          </div>

          <ul className="mt-6 space-y-3.5">
            {job.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-300/80" />
                <span>
                  <RichText text={point} />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
            {job.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </li>
  );
}

function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've"
          highlight="shipped."
          description="3+ years across defence electronics, mobile startups and freelance product work."
        />

        <div ref={listRef} className="relative mt-14 sm:mt-16">
          <div className="absolute bottom-0 left-4 top-6 w-px bg-white/[0.08] sm:left-5" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-4 top-6 w-px origin-top bg-gradient-to-b from-teal-300 via-sky-400 to-violet-400 sm:left-5"
          />
          <ol className="space-y-8 sm:space-y-10">
            {experience.map((job) => (
              <ExperienceItem key={job.company} job={job} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
