import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { EASE, fadeUp, stagger } from "./ui/motion";

const chipVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent)]" />
      </div>
      <div className="container-px">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The toolkit I use to"
          highlight="ship reliably."
          description="Languages, frameworks and infrastructure I use every day, from hardware-facing backends to pixel-perfect mobile UIs."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.1)}
          className="mt-14 grid gap-4 md:grid-cols-6"
        >
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} variants={fadeUp} className={group.span}>
              <SpotlightCard className="h-full" innerClassName="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-200 transition-colors duration-500 group-hover/card:border-teal-300/40">
                      <Icon name={group.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-slate-600">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <motion.ul variants={stagger(0.04, 0.15 + i * 0.05)} className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={chipVariant}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-teal-300/40 hover:bg-teal-300/[0.06] hover:text-white"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
