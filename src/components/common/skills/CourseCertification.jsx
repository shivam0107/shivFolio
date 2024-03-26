import React from "react";
import SIH from "../../../assets/certficate&Achievments/SIH-2023.jpeg";
import mernStack from "../../../assets/certficate&Achievments/Codehelp-MERN-certificate.png";

const CourseCertification = () => {
  return (
    <div className="w-11/12 mx-auto border-t-2 p-2  flex flex-col justify-center mt-10 items-center ">
      <h1 className="text-3xl p-2 border-2 rounded-md mt-5 bg-coolgray-950 font-bold mb-5">Achievments & Certifications</h1>
      <div className="space-y-10">
        <div className="flex  flex-col gap-5 md:flex-row justify-center items-center">
          <div className="flex flex-col w-[80%] mx-auto gap-2 ">
            <h1 className="text-3xl font-bold ">Smart India Hackthon - 2023</h1>
            <p className="font-bold">
            • Shortlisted in the top 5 teams in India out of 500 teams, In given
              problem statement.
            </p>

            <p className="">
              <span className="font-bold text-yellow-5 ">
                Problem Statement:{" "}
              </span>
              working on problem statement SIH-1383, Presented by ministry of
              himachal Pradesh, Focusing on developing an advanced System for
              "Optimizing doctor availability and appointment allocation in
              hospital through digital technology and AI Integration".We
              presented our solution, our software aimed to check doctor
              availability online and booking for consultation slots digitally.
            </p>
            <p className="">
              <span className="font-bold text-yellow-5">Location:</span> Mysure,
              Karnataka India
            </p>
          </div>
          <div>
            <img src={SIH} />
          </div>
        </div>

        <div className="flex flex-col  md:flex-row  flex-start ">
          <div className="flex flex-col w-[80%] mx-auto gap-2 ">
            <h1 className="text-3xl font-bold ">
              MERITORIOUS SCHOLARSHIP - 2020
            </h1>
            <p className="font-bold">
              • Recipient of the prestigious <span>25k</span> Meritorious Scholarship from
              the Government of Madhya Pradesh,recognizing exceptional academic
              achievements.
            </p>
            <p className="">
              <span className="font-bold text-yellow-5">Location:</span> Satna,
            Govt Excellence Higher Secondary School venkat No 1 satna MP
            </p>
          </div>
          <div>
            <img src='' alt="certificate" />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
          <div className="flex flex-col w-[80%] mx-auto  gap-2 ">
            <h1 className="text-3xl font-bold ">
              MERN FULL STACK DEVELOPEMENT- 2024
            </h1>
            <p className="font-bold">
              •I have done MERN full stack development course from codeHelp bootCamp dot Batch - 2023.
            </p>
            <p className="">
              <span className="font-bold text-yellow-5 ">
                Learning:{" "}
              </span>
              working on problem statement SIH-1383, Presented by ministry of
              himachal Pradesh, Focusing on developing an advanced System for
              "Optimizing doctor availability and appointment allocation in
              hospital through digital technology and AI Integration".We
              presented our solution, our software aimed to check doctor
              availability online and booking for consultation slots digitally.
            </p>
          </div>
          <div>
            <img src={mernStack} alt="certificate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertification;
