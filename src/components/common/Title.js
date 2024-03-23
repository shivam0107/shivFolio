import React from "react";

function Title({ title }) {
  return (
    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-100 ">
      {title}
    </h1>
  );
}

export default Title;
