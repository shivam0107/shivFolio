import React from "react";
import Title from "./common/Title";
import Lists from "./common/skills/Lists";
import Skills from "./common/Skills";
import Button from "./common/Button";

function projectCard({
  title,
  desc,
  pointsHeading,
  skillsArray,
  list,
  buttonText,
  projectImg,
  date,
  position,
}) {
  return (
    <div
      className={` flex ${position}  flex-col gap-5  space-y-3  bg-bluegray-700 p-5 rounded-lg justify-center items-center`}
    >
      <div className="w-[100%] text-bluegray-50 md:w-[50%]  flex flex-col space-y-2  items-center md:items-start">
        <Title title={title} />
        <p>{date}</p>
        <p>{desc}</p>
        <p className="mt-2 items-start ">{pointsHeading}</p>

        <div className="flex ">
          <div className="w-[12%]"></div>
          <Lists list={list} />
        </div>

        <Skills skills={skillsArray} />
        <Button text={buttonText} bg={"bg-[#F5DD61]"} projectName={title} />
      </div>
      <div className=" w-[45%] flex justify-center items-center ">
        <img src={projectImg} className="w-full  md:w-[500px] " />
      </div>
    </div>
  );
}

export default projectCard;
