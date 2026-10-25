import React from "react";
import { education, profile } from "../data/portfolio";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { scrollToId } from "./ui/hooks";

function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading index="05" eyebrow="Education" title="Foundations &" highlight="what's next." />

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <SpotlightCard className="h-full" innerClassName="relative flex flex-col overflow-hidden p-7 sm:p-9">
              <span
                aria-hidden="true"
                className="text-outline pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[7rem] font-bold leading-none sm:text-[9rem]"
              >
                B.Tech
              </span>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-teal-300/20 to-violet-400/20 text-teal-200">
                  <Icon name="graduationCap" className="h-7 w-7" />
                </span>
                <span className="chip">
                  <Icon name="calendar" className="h-3.5 w-3.5 text-teal-300" />
                  {education.period}
                </span>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Degree</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{education.degree}</h3>
              <p className="text-gradient mt-1 text-lg font-medium sm:text-xl">{education.field}</p>
              <p className="relative mt-6 max-w-md text-slate-400">{education.school}</p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <SpotlightCard className="h-full" innerClassName="flex flex-col gap-6 p-7 sm:p-9">
              <div>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Currently
                </p>
                <p className="mt-3 leading-relaxed text-slate-300">
                  <span className="font-medium text-white">{profile.role}</span> at{" "}
                  <span className="font-medium text-white">{profile.company}</span>, Ghaziabad. I build sensor
                  integration and real-time alerting systems for high-security zones.
                </p>
              </div>
              <div className="h-px bg-white/[0.08]" />
              <div>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-violet-300">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                  Open to
                </p>
                <p className="mt-3 leading-relaxed text-slate-300">
                  Opportunities in sensor integration, microservices architecture, and security & communication
                  systems.
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
                className="group mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-white"
              >
                Get in touch
                <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Education;
