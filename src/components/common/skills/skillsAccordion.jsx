import React, { useEffect, useRef } from "react";
import {
  FaAnglesRight,
  FaAnglesLeft,
  FaDatabase,
  FaAngleDown,
  FaAngleUp,
  FaAnglesUp,
} from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";

const SkillsAccordion = ({ data }) => {
  const [isActive, setIsActive] = useState(false);



  const contentEl = useRef();

  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    setSectionHeight(isActive ? contentEl.current.scrollHeight : 0);
  }, [isActive]);

  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center  text-white">
      <div className="">
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex border-[1px] p-2 cursor-pointer border-white gap-5 justify-between"
        >
          <FaAnglesRight className="text-3xl  font-bold" />
          <div>
            <h1 className="text-3xl text-yellow-5 font-bold">{data.name}</h1>
            <p>{data.experience}</p>
          </div>
          {isActive ? (
            <FaAngleUp className="text-3xl font-bold" />
          ) : (
            <FaAngleDown className="text-3xl font-bold" />
          )}
        </div>

        {isActive && (
          <div
            ref={contentEl}
            style={{
              height: sectionHeight,
              
            }}
            className="transition-[height] border-[1px] p-4  border-white duration-[0.5s] ease-[ease]"
          >
            {data.skills.map((item, index) => (
              <div className="flex flex-col space-y-2  ">
                <div className="flex mt-2 justify-between">
                  <p>{item.name}</p>
                  <p>{item.progress}%</p>
                </div>
                <progress
                  className=" bg-bluegray-50  w-full"
                  value={item.progress}
                  max="100"
                >
                  {" "}
                  {item.progress}{" "}
                </progress>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsAccordion;
