import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { projectDetailsData } from "../../Data/projectDetailsData";
import Overview from "./Features/Overview";
import OtherSection from "./Features/otherSection";
import Footer from "../Footer/Footer";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

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
  const otherSectionsRefs = useRef([]);

  projectData[0].map((data , index) => {
      otherSectionsRefs[index] = data;
  })

  


  // Function to scroll to a section based on ID
  const scrollToSection = (index) => {
    const ref = index === 0 ? overviewRef : otherSectionsRefs[index];
    ref.current?.scrollIntoView({ behavior: "smooth" });

    setIsMobileMenuOpen(false);
  };


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;
      const scrollPosition = window.scrollX + screenWidth;
      const positionThreshold = 0.8 * screenWidth;
  
      if (scrollPosition >= positionThreshold) {
        // Handle scroll action here
        console.log("Scrolled to 80% from the right of the screen");
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);


  return (
    <>
    <div className="w-11/12 mx-auto flex  flex-col md:flex-row mt-10">

      {/* mobile view */}
      <div className="md:hidden w-full md:w-2/4">

        <div onClick={toggleMobileMenu} className="text-white" >
              {!isMobileMenuOpen && <MdMenu size={40} />}
        </div>

       { 
         isMobileMenuOpen && (
              projectData ? (
              <div className="fixed flex top-20 left-0 right-0 justify-between w-11/12 mx-auto  p-8  italic rounded-md mt-2 bg-bluegray-200">
                <div className="text-black flex flex-col  space-y-3">
                  {projectData[0].map((data, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(index)}
                      className="font-bold p-3  text-2xl cursor-pointer rounded-lg"
                    >
                     {"-> "} {data.title}
                    </button>
                  ))}
                </div>

                <div
                  onClick={toggleMobileMenu}
                  className="p-2 text-black bg-bluegray-400 rounded-md w-fit h-fit"
                >
                  <IoClose size={40} className="" />
                </div>

              </div>
            ) : (
              <div>No Data found</div>
            )
          )
       }
      </div>

      {/* desktop view  */}
      <div className="hidden md:flex  w-full h-fit md:w-2/4">
          {projectData ? (
            <div className="text-black flex flex-col flex-start  p-8  italic rounded-md mt-2 bg-bluegray-200 space-y-3">
              {projectData[0].map((data, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="font-bold p-3  text-2xl cursor-pointer rounded-lg"
                >
                  {"-> "} {data.title}
                </button>
              ))}
            </div>
          ) : (
            <div>No Data found</div>
          )}
  </div>
  
      <div className=" p-2 overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div ref={overviewRef}>
          <Overview data={projectData[0][0]} />
        </div>
  
        <div> 
        {projectData[0].map((data, index) => (
          <div  key={index}>
            {index !== 0 && (
              <div  ref={otherSectionsRefs[index]}   onClick={() => scrollToSection(index)}>
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
