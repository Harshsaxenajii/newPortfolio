import React from "react";
import { featuredProjects } from "../data/portfolio";
import { DashboardMockup, MobileMockup } from "./ProjectVisuals";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import RichText from "./ui/RichText";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

function FeaturedProject({ project, index }) {
  const reversed = index % 2 === 1;
  const Visual = project.visual === "mobile" ? MobileMockup : DashboardMockup;

  return (
    <Reveal y={50} amount={0.12}>
      <SpotlightCard innerClassName="grid lg:grid-cols-2">
        <div
          className={`relative border-b border-white/[0.06] lg:border-b-0 ${
            reversed ? "lg:order-2 lg:border-l" : "lg:border-r"
          }`}
        >
          <Visual />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-teal-300">0{index + 1}</span>
            <span className="h-px w-6 bg-white/15" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{project.org}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <span
            className={`chip mt-4 w-fit ${
              project.live ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : ""
            }`}
          >
            {project.live ? (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            ) : (
              <Icon name="calendar" className="h-3.5 w-3.5 text-teal-300" />
            )}
            {project.status}
          </span>

          <ul className="mt-6 space-y-3.5">
            {project.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-300/80" />
                <span>
                  <RichText text={point} />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.1),transparent)]" />
      </div>
      <div className="container-px">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected"
          highlight="work."
          description="Products I've designed, built and shipped, from production mobile apps to internal business tools."
        />

        <div className="mt-14 space-y-6 sm:mt-16 sm:space-y-8">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
