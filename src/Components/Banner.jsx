import React, { useRef } from "react";
import git from "../Images/git.png";
import firebase from "../Images/firebase.png";
import node from "../Images/node.png";
import rect from "../Images/react.png";
import tailwind from "../Images/tailwind.png";
import mongo from "../Images/mongo.png";
import js from "../Images/js.png";
import ps from "../Images/ps.png";
import html from "../Images/html.png";
import css from "../Images/css.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
      <div className="mx-7 md:mx-14 h-screen flex justify-center items-center flex-col">
        <div className="md:w-4/6 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[#64ffda]">Hi, My Name Is</div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-[#3f4045] font-mono text-3xl md:text-7xl">
                Harsh Saxena.
              </div>
              <div className="font-bold text-[#3f4045] font-mono text-3xl md:text-7xl">
                Software & Web Developer.
              </div>
            </div>
          </motion.div>
          <motion.div
            // className="hidden md:flex gap-8 relative z-10"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="w-1/2 text-sm md:text-base text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              natus. Rerum facere reiciendis voluptates aliquam, fugiat suscipit
            </p>

            <HashLink to="#contact">
              <div className="my-6">
                <button className=" text-[#64ffda]  border-2  w-60 p-3 border-[#64ffda] rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out">
                  Hire Me
                </button>
              </div>
            </HashLink>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex gap-8 items-center flex-col md:flex-row ">
              <div>Tech Stacks</div>
              <div className="text-4xl font-extralight hidden md:block">|</div>
              <div className="flex gap-8 flex-wrap w-full md:w-2/3">
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={rect}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={html}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={css}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={js}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={node}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={tailwind}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={firebase}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={mongo}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={git}
                  alt=""
                />
                <img
                  className="hover:-translate-y-3 h-7 md:h-10"
                  src={ps}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
