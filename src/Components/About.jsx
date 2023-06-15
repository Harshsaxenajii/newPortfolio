import { motion } from "framer-motion";
import me from "../Images/me.jpg";
import Div from "./Div";
function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-5 justify-center items-center bg-[#121217] pt-12"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="heading text-2xl md:text-4xl  text-gray-100">
            About Me
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center  md:w-7/12 p-8 md:p-12">
        <div className="grid md:grid-cols-2">
          <Div className="flex flex-col gap-6 order-last md:-order-last">
            <div>
              <span className="text-5xl text-gray-500">H</span>
              <span className="text-sm md:text-base text-gray-400">
                ello! I am Harsh Saxena. As a developer, I have a solid
                foundation in React.js and extensive experience gained through
                an internship as a webdeveloper. Throughout my journey, I have
                worked on numerous projects, honing my skills and exploring
                various aspects of web development. From crafting engaging user
                interfaces to implementing efficient backend functionalities, I
                strive to deliver robust and user-centric solutions. With a
                passion for continuous learning and staying up-to-date with the
                latest industry trends, I am dedicated to delivering
                high-quality and impactful software solutions.
              </span>
            </div>
          </Div>
          <Div className="flex justify-center items-center relative">
            <img
              className="rounded-md h-48 w-48 md:w-64 md:h-64 z-10"
              src={me}
              alt="img"
            />
          </Div>
        </div>
      </div>
    </div>
  );
}

export default About;
