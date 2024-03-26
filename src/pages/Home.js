import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import shivam from "../assets/shiv-circle.png";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer/Footer";
import { technologies } from "../Data/data";
import { projects } from "../Data/data";
import ProjectSection from "../components/Project/ProjectSection";
import SocialLinks from "../components/common/contact/SocialLinks";
import Skills from "../components/common/Skills";

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* {hero section} */}

      <div className="mx-auto w-11/12 max-w-6xl flex  items-center justify-between  flex-col md:flex-row">
        {/* <div class="absolute faded-text">Shivam singh</div> */}
        <div className="mt-12 space-y-8 w-[100%] md:w-[60%] mb-4">
          <p className="text-3xl  text-bluegray-200">
            Hi! I am, <br></br>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-100 text-4xl md:text-5xl  rounded-lg mt-2">
              Shivam singh
            </span>
          </p>

          <TypeAnimation
            sequence={[
              ` Full stack MERN developer`,
              1000,
              "Coder",
              1000,
              "SIH-2023 grand Finalist",
              2000,
              "Problem Solver",
            ]}
            repeat={Infinity}
            cursor
            style={{
              fontSmooth: "medium",
              whiteSpace: "pre-line",
              display: "block",
            }}
            speed={10}
            className=" text-3xl md:text-5xl text-bluegray-50 font-semibold"
          />

          {/* <p className="text-2xl">
            I am a{" "}
            <span className="text-4xl font-bold hover:scale-2 hover:ease-in-out">
              Full stack{" "}
              <span className="text-indigo-500 font-bold underline shadow-lg px-0 py-0 md:px-1 md:py-1">
                MERN
              </span>{" "}
              Developer
            </span>
          </p> */}

          <p className="text-xl text-gray-400 mb-5">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. {":)"}
          </p>
          <button
            className=" text-white px-2 py-2  rounded-md transition 
        ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <Link
              to="https://bit.ly/49iY10R"
              className={(navClass) =>
                navClass.isActive
                  ? "text-blue-400"
                  : "text-black hover:text-green-600"
              }
              target="_blank"
            >
              Download CV
            </Link>
          </button>
            <div>
              <SocialLinks/>
            </div>

          <div className="flex items-center">
            <div className="bg-bluegray-700 py-2  px-2 text-white rounded-l-lg border-r-bluegray-100  border-2">
              <p className="text-center font-bold text-2xl">5</p>
              <p>Industry grade Projects</p>
            </div>
            <div className="bg-bluegray-700 py-2 px-2 text-white rounded-r-lg ">
              <p className="text-center font-bold text-2xl">300+</p>
              <p>DSA problem solved across Platform</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={shivam}
            alt=""
            className="rounded-lg mt-3 mb-5 w-[350px] h-[350px] "
          />
        </div>
      </div>

      {/* {tech stack section} */}
      <section className="bg-bluegray-800  w-11/12 mx-auto mt-6 py-16">
        <div className="container max-w-6xl mx-auto ">
          <h2 className="text-4xl text-bluegray-100 font-bold mb-8">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-bluegray-300 p-6 rounded-lg shadow-md transition 
        ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-400 duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {project section} */}
      <ProjectSection projects={projects} />

      <div>
        <Skills/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
