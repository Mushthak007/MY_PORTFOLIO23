import React from "react";
import { GiNotebook } from "react-icons/gi";
import { useSelector } from "react-redux";

const Projects = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="Project">
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <GiNotebook className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">PORTFOLIO</span>
      </div>
      <div className="py-14">
        <h1 className="text-white text-3xl lg:text-5xl">
          Featured <span style={{color:ColorNameFirst}} >Projects</span>
        </h1>
      </div>
    </div>
  );
};

export default Projects;
