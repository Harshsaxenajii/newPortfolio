import React from "react";
import logo from "../Images/Logo.png";

function PageNotFound() {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 flex-col flex justify-center items-center h-screen w-full">
        <img className="w-24 animate-spin" src={logo} alt="" />
        <div className="text-white">OOP'S</div>
        <div className="text-white"> Page Not Found</div>
      </div>
    </div>
  );
}

export default PageNotFound;
