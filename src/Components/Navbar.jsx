import React, { useState } from "react";
import menu from "../Images/close.png";
import logo from "../Images/Logo.png";
import "./CSS/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Navbar() {
  const [dropOpen, setDropOpen] = useState(false);
  const handleDropOnClick = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <motion.div
      className="block"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      <div className="">
        <nav
          className="flex justify-between h-14 xl:h-20 px-4 xl:px-12 items-center absolute top-0 w-full z-20 text-base shadow-md "
          style={{ zIndex: 30 }}
        >
          <section>
            {/* <img className="w-16" src={logo} alt="img" /> */}
            
          </section>
          <section className="">
            <div
              className={`flex gap-4 md:gap-8 bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 md:bg-none w-full align-middle ${
                dropOpen
                  ? " flex-col absolute left-0 top-12 px-6 py-4  w-full align-middle"
                  : "hidden"
              } xl:flex xl:flex-row xl:relative xl:top-0 xl:px-12 `}
            >
              <HashLink onClick={handleDropOnClick} smooth to="#about">
                <div className="pt-3 style_link fromLeft no-underline text-white hover:no-underline w-fit">
                  About
                </div>
              </HashLink>
              <HashLink onClick={handleDropOnClick} smooth to="#education">
                <div className="pt-3 style_link fromLeft no-underline text-white hover:no-underline w-fit">
                  Education
                </div>
              </HashLink>
              <HashLink onClick={handleDropOnClick} smooth to="#experience">
                <div className="pt-3 style_link fromLeft no-underline text-white hover:no-underline w-fit">
                  Experience
                </div>
              </HashLink>
              <HashLink onClick={handleDropOnClick} smooth to="#work">
                <div className="pt-3 style_link fromLeft no-underline text-white hover:no-underline w-fit">
                  Work
                </div>
              </HashLink>
              <HashLink onClick={handleDropOnClick} smooth to="#contact">
                <div className="pt-3 style_link fromLeft no-underline text-white hover:no-underline w-fit">
                  Contact
                </div>
              </HashLink>
              <div>
                <a href="./Resume/Resume.pdf" target="_blank">
                  <button
                    onClick={handleDropOnClick}
                    className=" text-white px-2 py-2 border-2 border-white rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out"
                  >
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </section>
          <section className="xl:hidden block">
            <div className="" onClick={handleDropOnClick}>
              <img className="w-8" src={menu} alt="" />
            </div>
          </section>
        </nav>
      </div>
    </motion.div>
  );
}

export default Navbar;
