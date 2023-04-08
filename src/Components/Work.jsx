import React, { useState } from "react";
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
          <img
            className="image my-6 xl:my-0"
            src={props.image}
            alt="Project Image"
          />
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
      desc: "Real time chatting application created with ReactJs, firebase, Redux and Tailwind Css. here I used good concepts of React Redux and Context and much more things",
      link: "https://talkrr-rose.vercel.app",
      RepoLink: "https://github.com/Harshsaxenajii/Talkrr",
    },
    {
      image: "./ProjectImages/shopping.png",
      title: "Shopping App",
      desc: "Developed an application using React.js, Node.js, and MongoDB as database. API integration and stripe is also use for authantication and Payment Gateway",
      link: "https://github.com/Harshsaxenajii/ShoppingApp",
      RepoLink: "https://github.com/Harshsaxenajii/ShoppingApp",
    },
    {
      image: "./ProjectImages/newsApp.png ",
      title: "News App",
      desc: "Created with ReactJs and news Api. I use many bootstarp components and also customize accroding to my requirement like card and navbar",
      link: "https://github.com/Harshsaxenajii/news-app",
      RepoLink: "https://github.com/Harshsaxenajii/news-app",
    },
    {
      image: "./ProjectImages/authantication.png ",
      title: "Authantication",
      desc: "Created Only for learning firebase Authantication. It has a good UI with email and google Authantication",
      link: "https://login-with-auth-nine.vercel.app/",
      RepoLink: "https://github.com/Harshsaxenajii/login-with-auth ",
    },
    {
      image: "./ProjectImages/texteditor.png ",
      title: "Text Editor",
      desc: "Created with react js. It is a perfect use of states and Js function. Dark mode is also available for users",
      link: "https://harshsaxenajii.github.io/Text_editor/",
      RepoLink: "https://github.com/Harshsaxenajii/Text_editor",
    },
  ]);
  return (
    <div id="work" className="px-12 py-20 bg-[#121217]">
      <div className="flex flex-col justify-center items-center mb-10 ">
        <div className="heading text-2xl md:text-4xl text-gray-100 ">
          My Projects{" "}
        </div>
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
