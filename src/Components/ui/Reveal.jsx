import React from "react";
import { motion } from "framer-motion";
import { EASE } from "./motion";

// Fades + slides its children in the first time they scroll into view.
function Reveal({ children, as = "div", delay = 0, y = 28, amount = 0.2, className, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Reveal;
