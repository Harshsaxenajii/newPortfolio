import React, { useState } from "react";
import { Link } from "react-router-dom";
import git from "../Images/git.png";
import get from "../Images/ext.png";
import { motion } from "framer-motion";

const PageSubComp = (props) => {
  return (
    <div className="flex justify-center items-center mt-[6rem] w-full ">
      <div className="flex flex-col xl:ml-[25%] justify-start xl:flex-row -mb-5 relative">
        <motion.div
          className="xl:w-5/12"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img className="image my-6 xl:my-0" src={props.image} alt="Project Image" />
        </motion.div>
        <motion.div
          className="xl:w-1/3 xl:absolute  flex flex-col justify-center items-start right-0 xl:left-[38%] h-[100%] gap-3"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <div className="mx-20 text-xl md:text-2xl font-bold text-gray-500">
            {props.title}
          </div>
          <div className="bg-[#000000] w-full rounded-xl  text-[#9ca8c6] shadow-black px-4 py-6 text-sm">
            <div>{props.desc}</div>
          </div>
          <div className="mx-20  text-[#9ca8c6] flex gap-2 items-center">
            {/* <div>Firebase</div>
            <div>React</div> */}
            <a href={props.RepoLink} target="_blank ">
              <img className="w-9" src={git} alt="" />
            </a>
            <a href={props.link} target="_blank ">
              <img className="w-7 " src={get} alt="" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function Work() {
  const [project] = useState([
    {
      image: "./ProjectImages/talkrr.png ",
      title: "Talkrr",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "https://talkrr-rose.vercel.app",
      RepoLink: "harshsaxenajii",
    },
    {
      image: "./ProjectImages/fuelcab.png",
      title: "Fuelcab App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "./ProjectImages/fuelcab.jpg ",
      RepoLink: "./ProjectImages/fuelcab.jpg ",
    },
    {
      image: "./ProjectImages/newsApp.png ",
      title: "News App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "./ ",
      RepoLink: "jk",
    },
    {
      image: "./ProjectImages/authantication.png ",
      title: "Authantication",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "./ ",
      RepoLink: "./ ",
    },
    {
      image: "./ProjectImages/texteditor.png ",
      title: "Text Editor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "./ ",
      RepoLink: "./ ",
    },
    {
      image: "./ProjectImages/kanha ji.png ",
      title: "Kanha Ji Appliances",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, natus possimus veritatis, exercitationem maiores voluptatem culpa magnam explicabo, a at ducimus dolorum corrupti nesciunt. Similique sit error architecto enim.",
      link: "./ ",
      RepoLink: "./ ",
    },
  ]);
  return (
    <div
      id="work"
      // className="px-12 py-20 bg-gradient-to-r from-pink-500 to-yellow-100"
      className="px-12 py-20 bg-[#121217]"
    >
      <div className="flex flex-col justify-center items-center mb-10 ">
        <div className="heading text-2xl md:text-4xl text-gray-100 ">My Projects </div>
        <div className="w-full">
          {project.map((info) => (
            <PageSubComp
              title={info.title}
              desc={info.desc}
              link={info.link}
              image={info.image}
              RepoLink={info.RepoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
