import React from "react";
import { useState } from "react";

function Skills({ skills }) {
  // console.log(skills);
  const n = skills.length;
  const [ShowMore, setShowMore] = useState(false);
  const newSkills = ShowMore ? skills : `${skills.slice(0, n / 2)}....`;

  function readMoreHandler() {
    setShowMore(!ShowMore);
  }

  return (
    <div className="flex gap-3  flex-wrap ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=" bg-bluegray-600 p-2 rounded-lg shadow-md transition 
        ease-in-out delay-150 hover:-translate-y-1 hover:scale-200 hover:text-white hover:bg-indigo-500 duration-300"
        >
          <h3 className="">{skill}</h3>
        </div>
      ))}
    </div>
  );
}

export default Skills;
