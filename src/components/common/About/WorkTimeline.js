import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const WorkTimeline = ({ elements }) => {
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
        contentArrowStyle={{ borderRight: "7px solid #2C333F" }}
      >
        {/* Role + Company */}
        <h3 className="text-lg font-semibold text-[#F2EDD1]">
          {element.role}
        </h3>
        <h4 className="text-md font-medium text-gray-300">
          {element.companyName}
        </h4>

        {/* Location */}
        <p className="text-sm text-gray-400 italic">{element.location}</p>

        {/* Details / Responsibilities */}
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#FAF9EE]">
          {element.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {element.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium rounded-full bg-[#FAF9EE] text-[#00809D]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {element.companyUrl && (
          <div className="mt-4">
            <a
              href={element.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-[#00809D] transition bg-[#FFF9BD] rounded-md hover:bg-[white]"
            >
              {element.buttonText}
            </a>
          </div>
        )}
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</div>

  );
};

export default WorkTimeline;
