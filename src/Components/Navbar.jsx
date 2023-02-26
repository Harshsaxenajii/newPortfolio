import React, { useState } from "react";
import menu from "../Images/close.png";
import logo from "../Images/Logo.png";
import "./CSS/Navbar.css";

function Navbar() {
  const [model, setModel] = useState(false);
  const [modal, setModal] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const handleDropOnClick = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <div className="">
      <nav
        className="flex justify-between bg-[#0a192f] h-20 xl:h-20 px-4 xl:px-12 items-center fixed top-0 w-full z-20 text-base shadow-md "
        style={{ zIndex: 30 }}
      >
        <section>
          <img className="w-16" src={logo} alt="img" />
        </section>
        <section className="">
          <div
            className={`flex gap-8 ${
              dropOpen
                ? " flex-col absolute left-0 top-20 px-6 py-4 bg-[#0a192f] w-full align-middle"
                : "hidden"
            } xl:flex xl:flex-row xl:relative xl:top-0`}
          >
            <div className="pt-3 style_link fromLeft no-underline text-[#ccd6f6] hover:no-underline w-fit">
              About
            </div>
            <div className="pt-3 style_link fromLeft no-underline text-[#ccd6f6] hover:no-underline w-fit">
              Education
            </div>
            <div className="pt-3 style_link fromLeft no-underline text-[#ccd6f6] hover:no-underline w-fit">
              Experience
            </div>
            <div className="pt-3 style_link fromLeft no-underline text-[#ccd6f6] hover:no-underline w-fit">
              Contact
            </div>
            <div>
              <button className=" text-[#64ffda] px-2 py-2 border-2 border-[#64ffda] rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out">
                Resume
              </button>
            </div>
          </div>
        </section>
        <section className="xl:hidden block">
          <div className="" onClick={handleDropOnClick}>
            <img className="w-8" src={menu} alt="" />
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
