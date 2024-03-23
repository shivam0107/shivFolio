import React from "react";
import data from ".././../Data/data";
import Button from "./Button";

function Lists({ list }) {
  // console.log(list);
  return (
    <ul className="list-disc align-right">
      {list.map((skill, index) => (
        <li key={index} className="">
          <h3 className="">{skill}</h3>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
