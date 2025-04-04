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

          <Div className="row row-2">
            <section className="shadow-md shadow-black text-sm md:text-base">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img
                  src="./Logos/siteGuide.png"
                  className="md:h-12 h-8 rounded-md"
                  alt=""
                />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Android & iOS developer at SiteGuide
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                {" "}
                Feburary 2025 - Till Now
              </span>
              <p className="text-sm text-[#9ca8c6]">
                Working on a pixel-perfect mobile application with modern
                features, load balancing strategies, and internationalization
                concepts to build a globally scalable app.
              </p>
            </section>
          </Div>

          <Div className="row row-1">
            <section className="shadow-md shadow-black text-sm md:text-base">
              <i className="icon fas fa-map-marker-alt"></i>
              <div className="details">
                <img
                  src="./Logos/steploops.jpeg"
                  className="md:h-12 h-8 rounded-md"
                  alt=""
                />
                <span className="text-xs md:text-sm title text-[#9ca8c6]">
                  Full Stack web developer at Steploops
                </span>
              </div>
              <span className="text-sm text-[#9ca8c6]">
                {" "}
                January 2024 - January 2025
              </span>
              <p className="text-sm text-[#9ca8c6]">
                Developed an e-commerce platform for Hurla Paints, serving
                1,000+ products. Integrated MSG91, VI DLT, and PhonePe, reducing
                transaction time by 30% and automating workflows by 40%.
              </p>
            </section>
          </Div>
          <Div className="row row-2">
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
                September 2023 - December 2023
              </span>
              <p className="text-sm text-[#9ca8c6]">
                As a Full Stack Web Developer, my role involves translating
                Figma designs into functional web applications. I collaborate
                closely with a diverse team of professionals to implement
                workflow logic and ensure seamless user experiences.
              </p>
            </section>
          </Div>
          <Div className="row row-1">
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
                October 2022 ‑ Septermber 2023
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

          {/* <Div className="row row-2">
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
          </Div> */}
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
