import React from "react";
import Title from "./common/Title";
import Lists from "./common/skills/Lists";
import Skills from "./common/Skills";
import Button from "./common/Button";

function projectCard({
  index,
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
      className={`  flex ${position} ${position === "md:flex-row" ? "md:ml-[200px]": "md:mr-[200px]" } relative flex-col mt-10 space-y-3 gap-10  bg-bluegray-700 p-5 rounded-lg justify-center items-center`}
    >

    <div className={ position === "md:flex-row" ? "absolute left-0 top-[-2%]  md:top-[-6%] " : " absolute right-0 top-[-2%]  md:top-[-6%]"}><p className="text-4xl md:text-6xl font-bold bg-gradient-to-tr from-purple-500 to-yellow-100 text-transparent bg-clip-text">0{index}</p></div>
      <div className={` w-[100%] text-bluegray-50 md:w-[50%]  flex flex-col space-y-2  items-center md:items-start`}>
      
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
