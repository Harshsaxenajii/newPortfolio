import { motion } from "framer-motion";
import React from "react";
import Div from "./Div";

function Education() {
  return (
    <div
      id="education"
      className="flex flex-col gap-5 justify-center items-center py-20 bg-[#121217]"
    >
      <motion.div
        className="flex flex-col justify-center items-center mb-10 "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="heading  text-2xl md:text-4xl  text-gray-100">
          My Education
        </div>
      </motion.div>
      <Div className="education mx-7 flex flex-col md:w-3/6 divide-y-2 divide-[#64ffda]">
        <div className=" flex flex-col gap-1 my-7 p-4 text-sm md:text-base text-[#9ca8c6]">
          <div className=" text-2xl  text-gray-700">Graduation</div>
          <div>Course : B-Tech (Computer Science & Engg.)</div>
          <div>
            College Name : Govind Ballabh Pant Institute Of Engineering And
            Technology{" "}
          </div>
          <div>Year : 2021-2025</div>
          <div>Score : Pursuing</div>
        </div>
        <div className="flex flex-col gap-1 my-7 p-4 text-sm md:text-base text-[#9ca8c6]">
          <div className=" text-2xl   text-gray-700">Intermediate</div>
          <div>College Name : Rana Pratap Inter College</div>
          <div>Stream : Physics, Chemistry And Maths</div>
          <div>Year : 2020 Pass Out</div>
          <div>Score : 88.2%</div>
        </div>
        <div className="flex flex-col gap-1 my-7 p-4 text-sm md:text-base text-[#9ca8c6]">
          <div className=" text-2xl  text-gray-700">High School</div>
          <div>College Name : Rana Pratap Inter College</div>
          <div>Stream : Science And Maths</div>
          <div>Year : 2018 Pass Out</div>
          <div>Score : 90.2%</div>
        </div>
      </Div>
    </div>
  );
}

export default Education;
