import React from "react";
import logo from "../Images/Logo.png";

function PleaseWait() {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 flex-col flex justify-center items-center h-screen w-full">
        <img className="w-24 animate-spin" src={logo} alt="" />
        <div className="text-white">Please Wait...</div>
      </div>
    </div>
  );
}

export default PleaseWait;
