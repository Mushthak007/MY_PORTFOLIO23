import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { Specializations } from "../Data/Video";
import { useSelector } from "react-redux";

const Services = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="Services">
      <div className="flex gap-2 items-center border border-gray-500 w-36 justify-center  py-1 rounded-2xl">
        <AiOutlineCode className="text-slate-200" />
        <h1 className="text-slate-200">SERVICES</h1>
      </div>

      <div className="py-8">
        <h1 className="text-white text-3xl lg:text-5xl">
          My <span style={{color:ColorNameFirst}} >Specializations</span>
        </h1>
        <div className="mt-10">
          <div className="flex flex-col gap-10 ">
            {Specializations.map((item) => {
              return (
                <div className="border border-gray-500 rounded-2xl px-10 py-5 hover:border-[#28e98c]">
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl tracking-wider">
                      {item.title}
                    </h1>
                    <span style={{color:ColorNameFirst}} >{item.icon}</span>
                  </div>
                  <div>
                    <h1 className="text-gray-500 py-2">{item.subtitle}</h1>
                    <h1 className="text-white py-7">{item.Projects}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
