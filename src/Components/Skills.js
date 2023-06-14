import React from "react";
import { GiSkills } from "react-icons/gi";
import { Skill } from "../Data/Video";
import { useSelector } from "react-redux";

const Skills = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="Skills">
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <GiSkills className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">MY SKILLS</span>
      </div>
      <div className="py-8">
        <h1 className="text-white text-3xl lg:text-5xl">
          My <span style={{color:ColorNameFirst}} >Advantages</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-20 ">
          {Skill.map((item) => {
            return (
              <div className="border-2 flex flex-col justify-center items-center px-7 py-14 rounded-full hover:border-[#28e98c]  hover:-translate-y-4 duration-700">
                <img src={item.image} alt="" className=""/>
                <h1 style={{color:ColorNameFirst}}  className=" text-3xl mt-4 text-center">
                  {item.percentage}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
