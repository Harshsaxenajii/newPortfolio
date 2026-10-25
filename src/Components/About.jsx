import React from "react";
import { motion } from "framer-motion";
import { profile, services, stats } from "../data/portfolio";
import Counter from "./ui/Counter";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import RichText from "./ui/RichText";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { fadeUp, inViewOnce, stagger } from "./ui/motion";

function Portrait() {
  return (
    <Reveal className="relative mx-auto w-full max-w-[22rem] lg:sticky lg:top-28">
      <div className="relative overflow-hidden rounded-[28px] p-[1.5px]">
        <div className="absolute inset-[-60%] animate-spin-slow bg-[conic-gradient(from_0deg,#5eead4,#38bdf8,#a78bfa,transparent_60%,#5eead4)]" />
        <div className="relative overflow-hidden rounded-[27px] bg-ink-900">
          <img
            src={profile.photo}
            alt={`Illustration representing ${profile.name}`}
            className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300">
              {profile.role} · {profile.companyShort}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="chip">
          <Icon name="mapPin" className="h-3.5 w-3.5 text-teal-300" />
          {profile.location.split(",").slice(0, 2).join(",")}
        </span>
        <span className="chip">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Open to opportunities
        </span>
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading index="01" eyebrow="About" title="Engineering software that" highlight="stays online." />

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Portrait />

          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
              variants={stagger(0.12)}
              className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.about.map((para, i) => (
                <motion.p key={i} variants={fadeUp}>
                  <RichText text={para} />
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
              variants={stagger(0.08)}
              className="mt-10 grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <SpotlightCard className="h-full" innerClassName="p-5 sm:p-6">
                    <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                      <Counter {...stat} />
                    </p>
                    <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1)}
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={fadeUp}>
              <SpotlightCard className="h-full" innerClassName="flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-teal-300/15 to-violet-400/15 text-teal-200 transition-transform duration-500 group-hover/card:-rotate-6 group-hover/card:scale-110">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
