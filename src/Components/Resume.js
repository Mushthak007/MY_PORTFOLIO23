import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Resume = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="Resume">
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <BsCalendar3 className="text-slate-200 " size={16} />
        <span className="text-slate-200 text-sm">RESUME</span>
      </div>
      <div className="py-5 mt-4 tracking-wide">
        <h1 className="text-5xl text-white">
          Education & <span  style={{color:ColorNameFirst}} >Experience</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center group">
        <div className="flex items-center gap-16">
          <div className="bg-gray-500 w-3 h-3 rounded-full group-hover:bg-[#28e98c]" />
          <h1 className="text-gray-500 group-hover:text-[#28e98c]">
            2022 - Present
          </h1>
        </div>
        <div className="flex gap-[70px]">
          <div className="w-[1px] h-44 bg-gray-500 ml-[5.5px]" />
          <div>
            <h1 className="text-white mt-5 text-xl">Iroid Technologies</h1>
            <h5 className="text-gray-400 mt-2">
              React JS & React Native Developer
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center group">
        <div className="flex items-center gap-16">
          <div className="bg-gray-500 w-3 h-3 rounded-full group-hover:bg-[#28e98c]" />
          <h1 className="text-gray-500 group-hover:text-[#28e98c]">
            2018 - 2022
          </h1>
        </div>
        <div className="flex gap-[70px]">
          <div className="w-[1px] h-28 bg-gray-500 ml-[5.5px]" />
          <div>
            <h1 className="text-white mt-5 text-xl">Bachelor of Technology</h1>
            <h5 className="text-gray-500 mt-2">
              Apj Abdul kalam technological university kerala,India
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
