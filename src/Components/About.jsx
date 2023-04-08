import { motion } from "framer-motion";
import me from "../Images/me.jpg";
import Div from "./Div";
function About() {
  return (
    <div
      id="about"
      // className="flex flex-col gap-5 justify-center items-center bg-gradient-to-r from-rose-50 to-teal-200 py-20"
      className="flex flex-col gap-5 justify-center items-center bg-[#121217] pt-12"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="heading text-2xl md:text-4xl  text-gray-100">About Me</div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center  md:w-7/12 p-8 md:p-12">
        <div className="grid md:grid-cols-2">
          <Div className="flex flex-col gap-6 order-last md:-order-last">
            <div>
              <span className="text-5xl text-gray-500">H</span>
              <span className="text-sm md:text-base text-gray-400">
                ello! My name is Harsh Saxena and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2020 when i decided to learn try editing custom themes -
                turns out hacking togather a custom reblog button taught me a
                lot about HTML & CSS!
              </span>
            </div>
            <div>
              <span className="text-sm md:text-base text-gray-400">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </span>
            </div>
          </Div>
          <Div className="flex justify-center items-center relative">
            <img className="rounded-md w-64 h-64 z-10" src={me} alt="img" />
          </Div>
        </div>
      </div>
    </div>
  );
}

export default About;
