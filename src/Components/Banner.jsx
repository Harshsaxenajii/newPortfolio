import React from "react";

function Banner() {
  return (
    <div>
      <div className="mx-7 md:mx-14 h-screen flex justify-center items-center flex-col ">
        <div className="md:w-4/6 flex flex-col gap-8">
          <div className="text-[#64ffda]">Hi, My Name Is</div>
          <div className="flex flex-col gap-3">
            <div className="font-bold text-[#ccd6f6] font-mono text-4xl md:text-7xl">
              Harsh Saxena.
            </div>
            <div className="font-bold text-[#ccd6f6] font-mono text-4xl md:text-7xl">
              Softwere And Web Developer.
            </div>
          </div>
          <p className="w-1/2 text-[#aab0c4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            natus. Rerum facere reiciendis voluptates aliquam, fugiat suscipit
            minus eum Rerum facere reiciendis voluptates aliquam, fugiat
            suscipit minus eum
          </p>
          <div>
            <button className=" text-[#64ffda] p-3 border-2 w-60 border-[#64ffda] rounded-md hover:border-cyan-800 hover:text-cyan-800 transition-all delay-100 hover:shadow-sm hover:shadow-cyan-600 ease-in-out">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
