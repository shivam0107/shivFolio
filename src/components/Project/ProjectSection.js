import React from "react";
import ProjectCard from "../projectCard";
import { setProject } from "../../store/Slices/ProjectSlice";
const ProjectSection = ({ projects }) => {
  return (
    <div>
      <section className="p-5">
        <div className="flex gap-8 md:justify-start ">
          <h1 className="text-bluegray-100 font p-3 text-4xl font-bold">
            My Projects{" "}
          </h1>
          <div className="md:h-[2px] md:w-[61em] md:mt-8 md:bg-bluegray-100"></div>
        </div>
        <div className="max-w-6xl space-y-4 mt-5 mx-auto">
             {projects.map((project, index) => {
             
              return (
                
              <ProjectCard
                position={project.position}
                title={project.title}
                date={project.date}
                desc={project.desc}
                pointsHeading={project.pointsHeading}
                skillsArray={project.skillsArray}
                list={project.list}
                projectImg={project.projectImg}
                buttonText={"view Projects Details"}
                
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
