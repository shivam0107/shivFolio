import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { projectDetailsData } from "../../Data/projectDetailsData";
import Overview from "./Features/Overview";
import OtherSection from "./Features/otherSection";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  const { projectName } = useParams();

  console.log("name on details", projectName);
  console.log("project coplete data", projectDetailsData);

  const projectData = [];

  // Iterate through each object in the array
  projectDetailsData.forEach((item) => {
    // Check if the current object has a key named ProjectName

    if (item.hasOwnProperty(projectName)) {
      // If yes, push all the data related to "apniPathShala" project into the projectData array
      projectData.push(item[projectName]);
    }
  });
  console.log("project data", projectData);

  const overviewRef = useRef(null);
  const otherSectionsRefs = useRef(null);

  


  // Function to scroll to a section based on ID
  const scrollToSection = (index) => {
    const ref = index === 0 ? overviewRef : otherSectionsRefs;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
    <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-x-6 md:space-y-0 mt-10 mb-10 max-w-maxContent mx-auto">
      <div className="w-full md:w-1/4">
        {projectData ? (
          <div className="text-black flex flex-col flex-end p-8  italic rounded-md mt-2 bg-bluegray-200 space-y-3">
            {projectData[0].map((data, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(index)}
                className="font-bold p-3  text-2xl cursor-pointer rounded-lg"
              >
                {data.title}
              </div>
            ))}
          </div>
        ) : (
          <div>No Data found</div>
        )}
      </div>
  
      <div className="w-full md:w-3/4 p-2 overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div ref={overviewRef}>
          <Overview data={projectData[0][0]} />
        </div>
  
        <div ref={otherSectionsRefs}> 
        {projectData[0].map((data, index) => (
          <div key={index}>
            {index !== 0 && (
              <div onClick={() => scrollToSection(index)}>
                <OtherSection data={data}     />
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
  
  );
};

export default ProjectDetails;
