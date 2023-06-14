import { motion } from "framer-motion";
import React from "react";
import "./CSS/MyJor.css";
import Div from "./Div";

function MyJourney() {
  return (
    <div
      id="experience"
      // className="px-2 md:px-14 bg-gradient-to-t py-20 to-orange-200 from-sky-600"
      className="px-2 md:px-14 py-20 bg-[#121217]"
    >
      <motion.div
        className="flex flex-col justify-center items-center"
        // initial={{ x: 100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.4, delay: 0.3 }}
        // viewport={{ once: true }}
      >
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
                <img src="./Logos/main.png" className="h-12" alt="" />
                <span className="text-sm title text-[#9ca8c6]">
                  Fuelcab Internship
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">June, 2019</span>
              <p className="text-sm text-[#9ca8c6]">
                I have worked on a collaborative project and I learn about
                open-source contributions like branching in git and many more. I
                know about the fire store, firebase authentication and Realtime
                database.
              </p>
            </section>
          </Div>

          <Div className="row row-2">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img src="./Logos/main.png" className="h-12" alt="" />
                <span className="text-sm title text-[#9ca8c6]">
                  Fuelcab Internship
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">June, 2019</span>
              <p className="text-sm text-[#9ca8c6]">
                Here I am working on the design and development of the complete
                site. I have learned React up to advance level like how to use
                context and Redux. I have improved my tech knowledge and try to
                get familiar with firebase and GitHub.
              </p>
            </section>
          </Div>
          <Div className="row row-1">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img className="h-12" src="./Logos/baltra.png" alt="" />
                <span className="text-sm title text-[#9ca8c6]">
                  Started Customer Service
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">July, 2021</span>
              <p className="text-sm text-[#9ca8c6]">
                Worked on solving the problem of customer and manage the CRM •
                Hire technician for field work and also trained for the service
                on customer site. Work with the company’s employee and head of
                the company. Learn about the work flow of all these transitions
                of spare and services.
              </p>
            </section>
          </Div>

          <Div className="row row-2">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img className="h-14" src="./Logos/dst.png" alt="" />
                <span className="text-sm title text-[#9ca8c6]">
                  Inspire Summer Camp
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">June, 2019</span>
              <p className="text-sm text-[#9ca8c6]">
                After 10th I had selected for 5 days summer camp in srinagar
                Uttarakhand. Experienced professors took the seminar and provide
                the amazing practical knowledge about science.
              </p>
            </section>
          </Div>

          <Div className="row row-1">
            <section className="shadow-md shadow-black">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img className="h-14" src="./Logos/img.png" alt="" />
                <span className="text-sm title text-[#9ca8c6]">Award</span>
              </div>
              <span className="text-sm text-[#9ca8c6]">June, 2019</span>
              <p className="text-sm text-[#9ca8c6]">
                Got a award form "Mr. Bhagat Singh Koshyari" for get the
                position in top 1% students in Uttarakand board
              </p>
            </section>
          </Div>
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
