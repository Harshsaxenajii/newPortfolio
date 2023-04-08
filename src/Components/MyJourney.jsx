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
        <div className="heading text-2xl md:text-4xl  text-gray-100">My Experience</div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                ratione ipsam ipsa dolor eius perspiciatis quisquam sed
                repudiandae minima expedita.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                ratione ipsam ipsa dolor eius perspiciatis quisquam sed
                repudiandae minima expedita.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                ratione ipsam ipsa dolor eius perspiciatis quisquam sed
                repudiandae minima expedita.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                ratione ipsam ipsa dolor eius perspiciatis quisquam sed
                repudiandae minima expedita.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                ratione ipsam ipsa dolor eius perspiciatis quisquam sed
                repudiandae minima expedita.
              </p>
            </section>
          </Div>
        </div>
      </div>
    </div>
  );
}

export default MyJourney;

{
  /* highschool */
}
{
  /* <div className="row row-2">
<section className="shadow-md shadow-black">
  <i className="icon fas fa-map-marker-alt"></i>
  <div className="details">
      <span className="text-sm title text-[#9ca8c6]">Schooling</span>
      <span className="text-sm text-[#9ca8c6]">before 2017</span>
      </div>
    <p className="text-sm text-[#9ca8c6]">
    At that time I was not interested in studies. I spent my lot of
      time working with electronic devices like soldering, multimeters
      and tools. I was also interested in repairing devices. I
      repaired many pcbs. These things were the great attraction form
      me towards engineering.
      </p>
      </section>
    </div> */
}
{
  /* <div className="row row-1">
    <section className="shadow-md shadow-black">
      <i className="icon fas fa-paper-plane" />
      <div className="details">
        <span className="title text-[#9ca8c6]">High School</span>
        <span className="text-[#9ca8c6]">2017 - 18</span>
      </div>
      <p className="text-[#9ca8c6]">
        In my 10th class I was very interested in science and
        mathematics. So I prepared very well for the board exam, and
        finally I scored 98 in maths and 93 in science and totaled more
        than 90 percentage on the state board.
      </p>
    </section>
  </div> */
}
// <div className="row row-1">
//   <section className="shadow-md shadow-black">
//     <i className="icon fas fa-home"></i>
//     <div className="details">
//       <span className="text-sm title text-[#9ca8c6]">Collage</span>
//       <span className="text-sm text-[#9ca8c6]">1st Jan 2021</span>
//     </div>
//     <p className="text-sm text-[#9ca8c6]">
//       Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
//       qui veroes praesentium maiores, sint eos vero sapiente voluptas
//       debitis dicta dolore.
//     </p>
//   </section>
// </div>
// <div className="row row-2">
//   <section className="shadow-md shadow-black">
//     <i className="icon fas fa-star" />
//     <div className="details">
//       <span className="text-sm title text-[#9ca8c6]">Drop Year</span>
//       <span className="text-sm text-[#9ca8c6]">2020 - 2021</span>
//     </div>
//     <p className="text-sm text-[#9ca8c6]">
//       Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
//       qui veroes praesentium maiores, sint eos vero sapiente voluptas
//       debitis dicta dolore.
//     </p>
//   </section>
// </div>
// <div className="row row-1">
//   <section className="shadow-md shadow-black">
//     <i className="icon fas fa-rocket" />
//     <div className="details">
//       <span className="text-sm title text-[#9ca8c6]">
//         Intermediate
//       </span>
//       <span className="text-sm text-[#9ca8c6]">2019 - 20</span>
//     </div>
//     <p className="text-sm text-[#9ca8c6]">
//       Due to board exams, I dedicated my time to my study. I focused
//       on the concepts of science and maths and I scored around 88
//       percentage points.
//     </p>
//   </section>
// </div>
// <div className="row row-2">
//   <section className="shadow-md shadow-black">
//     <i className="icon fas fa-globe" />
//     <div className="details">
//       <span className="text-sm title text-[#9ca8c6]">
//         11th class (1st year)
//       </span>
//       <span className="text-sm text-[#9ca8c6]">2018 - 19</span>
//     </div>
//     <p className="text-sm text-[#9ca8c6]">
//       In my 11th class i was selected for the inspire 5 days summer
//       camp, it is only for the top 1% students of state board were
//       held in srinagar uttarakhand there I explored about the morden
//       science. I was impressed and looked into the depth of science;
//       and then I am much interested in physics. At that time my vision
//       was not clear if I wanted to become an engineer or scientist. I
//       mean, B- tech and Bsc.
//     </p>
//   </section>
// </div>
