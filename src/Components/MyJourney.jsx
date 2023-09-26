import { motion } from "framer-motion";
import React from "react";
import "./CSS/MyJor.css";
import Div from "./Div";

function MyJourney() {
  return (
    <div id="experience" className="px-2 md:px-14 py-20 bg-[#121217]">
      <motion.div className="flex flex-col justify-center items-center">
        <div className="heading text-2xl md:text-4xl  text-gray-100">
          My Experience
        </div>
      </motion.div>
      <div className="mt-12">
        <div className="wrapper">
          <div className="center-line">
            <i className="fas fa-caret-up"></i>
          </div>

          <Div className="row row-1">
            <section className="shadow-md shadow-black text-sm md:text-base">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img
                  src="./Logos/tapop.jpg"
                  className="md:h-12 h-8 rounded-md"
                  alt=""
                />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Full Stack web developer at Qviq
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                {" "}
                September 2023 - Till Now
              </span>
              <p className="text-sm text-[#9ca8c6]">
                As a Full Stack Web Developer, my role involves translating
                Figma designs into functional web applications. I collaborate
                closely with a diverse team of professionals to implement
                workflow logic and ensure seamless user experiences.
              </p>
            </section>
          </Div>
          <Div className="row row-2">
            <section className="shadow-md shadow-black text-sm md:text-base">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img src="./Logos/main.png" className="md:h-12 h-8" alt="" />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Frontend Develoepr at Fuelcab
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                {" "}
                January. 2023 ‑ July. 2023
              </span>
              <p className="text-sm text-[#9ca8c6]">
                Through a collaborative project, I learned about open-source
                contributions like Git branching. I also gained knowledge in
                Firebase tools such as Firestore, Firebase Authentication, and
                Realtime Database, providing insights into cloud-based data
                storage, user authentication, and real-time updates. Teamwork
                and open-source resources proved essential for successful
                software development.
              </p>
            </section>
          </Div>

          <Div className="row row-1">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img src="./Logos/main.png" className="md:h-12 h-8" alt="" />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  React Developer at Fuelcab
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                July. 2022 ‑ August. 2022
              </span>
              <p className="text-sm text-[#9ca8c6]">
                In this role, I was responsible for the end-to-end design and
                development of the website. I gained expertise in React,
                exploring advanced concepts such as context and Redux.
                Additionally, I expanded my technical knowledge by familiarizing
                myself with Firebase and GitHub, further enhancing my skills in
                the process.
              </p>
            </section>
          </Div>

          <Div className="row row-2">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img className="md:h-12 h-8" src="./Logos/baltra.png" alt="" />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Managing Customer Service
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                July. 2021 - January. 2022
              </span>
              <p className="text-sm text-[#9ca8c6]">
                In my role, I tackled customer issues and handled CRM
                management. I hired and trained technicians for field work,
                ensuring quality service on customer sites. Collaborating with
                company employees and the company head, I gained insights into
                the workflow of spare parts and services transitions.
              </p>
            </section>
          </Div>
          <Div className="row row-1 ">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img className="md:h-14 h-10" src="./Logos/dst.png" alt="" />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Inspire Summer Camp
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">June, 2019</span>
              <p className="text-sm text-[#9ca8c6]">
                After completing 10th grade, I was selected for a 5-day summer
                camp in Srinagar, Uttarakhand. Accompanied by experienced
                professors, the camp offered engaging seminars and practical
                sessions that enriched my scientific knowledge and left me
                amazed.
              </p>
            </section>
          </Div>
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
