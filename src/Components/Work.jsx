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
  const [limit, setLimit] = useState(3);
  const [project] = useState([
    {
      image: "./ProjectImages/talkrr.png ",
      title: "Talkrr",
      desc: "I developed a real-time chat application using ReactJS, Firebase, Redux, and Tailwind CSS. Leveraging the power of React Redux and Context, I implemented advanced concepts and integrated various other functionalities for an enhanced user experience.",
      link: "https://talkrr-rose.vercel.app",
      RepoLink: "https://github.com/Harshsaxenajii/Talkrr",
    },
    {
      image: "./ProjectImages/shopping.png",
      title: "Shopping App",
      desc: "I developed an application using React.js, Node.js, and MongoDB as the database. The project involved API integration and the utilization of Stripe for authentication and as a payment gateway.",
      link: "https://github.com/Harshsaxenajii/ShoppingApp",
      RepoLink: "https://github.com/Harshsaxenajii/ShoppingApp",
    },
    {
      image: "./ProjectImages/newsApp.png ",
      title: "News App",
      desc: "I developed a project using ReactJS and a News API. Utilizing various Bootstrap components, such as customized cards and navigation bars, allowed me to tailor the design according to my specific requirements.",
      link: "https://github.com/Harshsaxenajii/news-app",
      RepoLink: "https://github.com/Harshsaxenajii/news-app",
    },
    {
      image: "./ProjectImages/authantication.png ",
      title: "Authentication",
      desc: "I focused on learning Firebase Authentication, specifically its user-friendly UI that supports email and Google authentication. This experience was solely dedicated to improving my understanding of this aspect of Firebase for future development projects.",
      link: "https://login-with-auth-nine.vercel.app/",
      RepoLink: "https://github.com/Harshsaxenajii/login-with-auth ",
    },
    {
      image: "./ProjectImages/texteditor.png ",
      title: "Text Editor",
      desc: "Built with React.js, this project showcases the perfect utilization of states and JavaScript functions. Additionally, it offers users the convenience of a dark mode feature, enhancing the overall user experience and accessibility.",
      link: "https://harshsaxenajii.github.io/Text_editor/",
      RepoLink: "https://github.com/Harshsaxenajii/Text_editor",
    },
  ]);
  return (
    <div
      id="work"
      className="flex justify-center flex-col gap-6 items-center px-12 py-20 bg-[#121217]"
    >
      <div className="flex flex-col justify-center items-center mb-10 ">
        <div className="heading text-2xl md:text-4xl text-gray-100 ">
          My Projects{" "}
        </div>
        <div className="w-full">
          {project.slice(0, limit).map((info) => (
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

      {limit != project.length && (
        <button
          onClick={() => setLimit(project.length)}
          className="w-20 text-white px-2 py-2 border-2 border-white rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out"
        >
          More
        </button>
      )}
    </div>
  );
}

export default Work;
