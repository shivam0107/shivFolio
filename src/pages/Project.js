import React from "react";
import { projects } from "../Data/data";
import ProjectSection from "../components/Project/ProjectSection";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";





const Project = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className=" ">
      <div className=" w-11/12 mx-auto   max-w-6xl">
        <ProjectSection projects={projects} />
      </div>

      <Footer />
    </div>
  );
};

export default Project;
