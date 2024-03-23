import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function Button({ text, bg, projectName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hendleOnSubmit = () => {
    console.log("projectNameonButton", projectName);
    localStorage.setItem("projectName" , JSON.stringify(projectName));

    navigate(`/project-details/${projectName}`);
  };

  return (
    <button
      onClick={hendleOnSubmit}
      className={`${bg} text-xl mt-3 text-bluegray-100 py-3 
      px-4 bolder border-2 border-blue-400 rounded-[90px]
      transition-all hover:scale-95 hover:bg-bluegray-800 hover:text-white`}
    >
      {text}
    </button>
  );
}

export default Button;
