import React from "react";
import { motion } from "framer-motion";
import { EASE, maskUp, stagger, fadeUp } from "./motion";

function Words({ text, gradient }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="mr-[0.24em] inline-block overflow-hidden pb-[0.1em] align-bottom">
      <motion.span variants={maskUp} className={`inline-block ${gradient ? "text-gradient" : ""}`}>
        {word}
      </motion.span>
    </span>
  ));
}

// Numbered eyebrow + word-by-word title reveal + optional description.
function SectionHeading({ index, eyebrow, title, highlight, description, align = "left" }) {
  const centered = align === "center";
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger(0.06)}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <motion.div
        variants={fadeUp}
        className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-teal-300">{index}</span>
        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
          }}
          className="h-px w-10 origin-left bg-gradient-to-r from-teal-300 to-violet-400"
        />
        <span className="text-slate-400">{eyebrow}</span>
      </motion.div>
      <h2 className="font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
        <Words text={title} />
        {highlight && <Words text={highlight} gradient />}
      </h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
