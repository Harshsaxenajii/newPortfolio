import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechMarquee from "./TechMarquee";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Preloader from "./Preloader";
import BackToTop from "./BackToTop";
import { Backdrop, Cursor, ScrollProgress } from "./Backdrop";
import { scrollToId } from "./ui/hooks";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Index() {
  const [loading, setLoading] = useState(() => !prefersReducedMotion());
  const finishLoading = useCallback(() => setLoading(false), []);

  // Honour deep links like /#projects once the intro has finished.
  useEffect(() => {
    if (loading) return;
    const id = window.location.hash.slice(1);
    if (id && document.getElementById(id)) scrollToId(id);
  }, [loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onComplete={finishLoading} />}</AnimatePresence>

      <Backdrop />
      <Cursor />
      <ScrollProgress />
      <Navbar ready={!loading} />

      <div className="overflow-x-clip">
        <main>
          <Hero ready={!loading} />
          <TechMarquee />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
      <BackToTop />
    </MotionConfig>
  );
}

export default Index;
