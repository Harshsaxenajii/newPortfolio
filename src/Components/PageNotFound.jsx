import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";
import Icon from "./ui/Icon";
import { EASE } from "./ui/motion";

function PageNotFound() {
  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden px-5 text-center">
      <Backdrop />
      <div className="grid-bg mask-radial absolute inset-0 -z-10" />
      <div>
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: EASE }}
          className="text-gradient font-display text-[clamp(6rem,25vw,14rem)] font-bold leading-none tracking-tighter"
        >
          404
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">Signal lost.</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-teal-200"
          >
            <Icon name="arrowRight" className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default PageNotFound;
