import React from "react";
import me from "../Images/me.jpg";

function About() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mb-12">
      <div className="flex flex-col justify-center items-center ">
        <div className="heading text-4xl  text-[#aab0c4]">About Me</div>
      </div>
      <div className="flex justify-center items-center  w-7/12 p-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-5xl">H</span>
              <span className="text-[#aab0c4]">
                ello! My name is Harsh Saxena and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2020 when i devided to learn try editing custom themes -
                turns out hacking togather a custom reblog button taught me a
                lot about HTML & CSS!
              </span>
            </div>
            <div>
              <span className="text-[#aab0c4]">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </span>
            </div>
            <div>
              <span className="text-[#aab0c4]">
                Here are a few technologies I’ve been working with recently:
              </span>
            </div>
            <div>
              <li className="text-[#aab0c4]">Java Script</li>
              <li className="text-[#aab0c4]">React</li>
              <li className="text-[#aab0c4]">Node Js</li>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="image rounded-md w-64 h-64" src={me} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
