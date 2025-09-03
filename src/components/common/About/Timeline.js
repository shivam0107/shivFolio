import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const AcademicTimeline = ({ elements }) => {
  return (
    <div className="text-white">
      <VerticalTimeline>
        {elements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={element.icon === "work" ? <MdWork /> : <FaUserGraduate />}
            contentStyle={{
              background: "#2C333F",
              color: "#fff",
              borderRadius: "12px",
            }}
          >
            <div className="text-bluegray-100 ">
              <h1 className="text-xl font-bold  text-[#F2EDD1]">
                {element.institute}
              </h1>
              <p>{element.title}</p>

              <div className="flex">
                <div>
                  {element.date} <span className="p-1">|</span>
                </div>
                <div> {element.details}</div>
              </div>
              <div className="mt-2 p-3 bg-bluegray-500 w-fit rounded-md transition-all duration-200 hover:scale-95 text-yellow-5">
                <Link to={element.link} target="_blank">
                  {element.buttonText}
                </Link>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default AcademicTimeline;
