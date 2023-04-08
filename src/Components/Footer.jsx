import React from "react";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import Div from "./Div";
const git = "./Logos/newGit.png";

function Footer() {
  return (
    <div
      id="contact"
      className=" flex-col flex justify-center items-center py-6 bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="mt-32 flex-col flex justify-center items-center h-[40rem]">
        <Div className=" flex flex-col justify-center items-center">
          <div className="text-xl  text-[#3f4045] ">Contact Me</div>
        </Div>
        <div className="flex justify-center flex-col items-center  md:w-6/12 p-8 md:p-12 gap-8">
          <Div className="font-bold text-[#3f4045] font-mono text-4xl md:text-7xl">
            Get In Touch
          </Div>
          <Div className="text-center text-sm md:text-base  text-[#3f4045]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Div>

          <Div>
            <button
              onClick={() =>
                (window.location = "mailto:harshsaxenajii@gmail.com")
              }
              className=" text-[#104539] p-3 border-2 w-60 border-[#104539] rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out"
            >
              Say Hey!
            </button>
          </Div>
          <Div className="flex gap-3 items-center ">
            <div className="text-[#104539]">Connect On : </div>
            <img
              className="hover:-translate-y-1 transition-all ease-in-out delay-75 cursor-pointer w-8 h-8"
              src={git}
              alt=""
            />
            <img
              className="hover:-translate-y-1 transition-all ease-in-out delay-75 cursor-pointer w-8 h-8"
              src={linkedin}
              alt=""
            />
            <img
              className="hover:-translate-y-1 transition-all ease-in-out delay-75 cursor-pointer w-8 h-8"
              src={instagram}
              alt=""
            />
          </Div>
        </div>
      </div>
      <Div className="text-sm  text-[#104539] ">
        Design And Develop By Harsh Saxena
      </Div>
    </div>
  );
}

export default Footer;
