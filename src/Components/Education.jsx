import React from "react";

function Education() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mb-20">
      <div className="flex flex-col justify-center items-center mb-10 ">
        <div className="heading text-4xl  text-[#aab0c4]">My Education</div>
      </div>
      <div className="education mx-7 flex flex-col md:w-3/6 divide-y-2 divide-[#64ffda]">
        <div className=" flex flex-col gap-1 my-7 p-4">
          <div className=" text-2xl  text-[#aab0c4]">Graduation</div>
          <div>Course : B-Tech (Computer Science & Engg.)</div>
          <div>
            Collage Name : Govind Ballabh Pant Institute Of Engineering And
            Technology{" "}
          </div>
          <div>Year : 2021-2025</div>
          <div>Score : Pursuing</div>
        </div>
        <div className="flex flex-col gap-1 my-7 p-4">
          <div className=" text-2xl  text-[#aab0c4]">Intermediate</div>
          <div>Collage Name : Rana Pratap Inter Collage</div>
          <div>Stream : Physics, Chemistry And Maths</div>
          <div>Year : 2020 Pass Out</div>
          <div>Score : 88.2%</div>
        </div>
        <div className="flex flex-col gap-1 my-7 p-4">
          <div className=" text-2xl  text-[#aab0c4]">High School</div>
          <div>Collage Name : Rana Pratap Inter Collage</div>
          <div>Stream : Science And Maths</div>
          <div>Year : 2018 Pass Out</div>
          <div>Score : 90.2%</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
