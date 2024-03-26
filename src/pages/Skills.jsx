import React from "react";
import {
  FaAnglesRight,
  FaAnglesLeft,
  FaDatabase,
  FaAngleDown,
} from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { accordion } from "../Data/skillAccordion";
import SkillsAccordion from "../components/common/skills/skillsAccordion";
import Footer from "../components/Footer/Footer";

const SkillSection = () => {
  return (
    <>
      <div className="w-11/12 mx-auto mb-16 text-white">
        <div className="flex flex-col mt-10 items-center">
          <h1 className="text-3xl font-bold">Skills</h1>
          <h2>My technical Skills</h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {accordion.map((data, index) => {
            return <SkillsAccordion data={data} index={index} />;
          })}
        </div>
      </div>
      <Footer className="" />
    </>
  );
};

export default SkillSection;
