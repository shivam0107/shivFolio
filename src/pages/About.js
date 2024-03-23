import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/common/About/Timeline";
import { educationTimelineElements, workTimelineElements } from "../Data/data";
import { useNavigate } from "react-router-dom";

function About() {
  const [isAcademics, setAcademics] = useState(true);
  const [isWork, setWork] = useState(false);
  const navigate = useNavigate();

  const handelExperience = () => {
    setWork(true);
    setAcademics(false);
    navigate("/projects");
  };

  return (
    <div>
      <section className=" mx-auto w-[80%]  py-16">
        <div className="container mx-auto ">
          <h2 className="text-4xl text-white font-bold mb-8">
            Educational Background
          </h2>
          <div className=" mb-2 flex justify-center gap-3 text-white">
            <div className="p-2 bg-bluegray-600 rounded-md">
              <button onClick={() => setAcademics(true)}>Academics</button>
            </div>
            <div className="p-2 bg-bluegray-600 rounded-md">
              <button onClick={handelExperience}> Experience</button>
            </div>
          </div>
          <div className="w-11/12 mx-auto ">
            {isAcademics && <Timeline elements={educationTimelineElements} />}
            {/* {isWork && <Timeline elements={workTimelineElements} />} */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

//         <div className="grid max-w-5xl items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//          Program 1

//  <div className="bg-bluegray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
//    <h3 className="text-xl font-bold mb-4">Program 1</h3>
//    <p className="text-bluegray-50">
//      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//    </p>
//    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//      Learn More
//    </button>
//  </div>;

//  {
//    /* Program 2 */
//  }
//  <div className="bg-bluegray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
//    <h3 className="text-xl font-bold mb-4">Program 2</h3>
//    <p className="text-bluegray-50">
//      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//    </p>
//    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//      Learn More
//    </button>
//  </div>;

//  {
//    /* Program 3 */
//  }
//  <div className="bg-bluegray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
//    <h3 className="text-xl font-bold mb-4">Program 3</h3>
//    <p className="text-bluegray-50">
//      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//    </p>
//    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//      Learn More
//    </button>
//  </div>;

//  {
//    /* Program 3 */
//  }
//  <div className="bg-bluegray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
//    <h3 className="text-xl font-bold mb-4">Program 3</h3>
//    <p className="text-bluegray-50">
//      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//    </p>
//    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//      Learn More
//    </button>
//  </div>;
//  {
//    /* </div> */
//  }
