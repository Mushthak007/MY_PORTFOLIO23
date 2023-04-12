import React from "react";
import { FaHome } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";

const Details = () => {
  return (
    <>
      <div className=" lg:mt-16 mt-5  xl:mr-60 p-5  max-w-[950px] lg:ml-[500px] font-mono">
        <div className="flex gap-2 items-center border border-gray-500 w-36 justify-center  py-1 rounded-2xl">
          <FaHome className="text-slate-200" />
          <h1 className="text-slate-200">INTRODUCE</h1>
        </div>

        <div className="text-white font-thin tracking-widest leading-normal text-4xl xl:text-6xl lg:tracking-widest lg:leading-snug mt-8">
          <span className="text-slate-400"> Say Hi from,</span>
          <br />{" "}
          <span className="text-[#28e98c] font-bold text-5xl  lg:text-[50px] xl:text-[100px] whitespace-nowrap">
            Mushthak
          </span>{" "}
          <span className="lg:whitespace-nowrap">
            a skilled <br /> MERN Stack Developer
          </span>
        </div>
        <div className="text-gray-400  mt-10 max-w-[700px]">
          Hey, it's Musthak here! Are you ready to see what a top-notch MERN
          Stack Developer can do? Buckle up and get ready to be blown away by
          the power of my skills and expertise !
        </div>

        <div className="flex lg:justify-end py-14">
          <div className="border border-gray-400 rounded-full p-2 cursor-pointer">
            <FiArrowDown
              className="text-slate-200 absolute ml-12 mt-12 "
              size={50}
            />
            <img
              src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png"
              alt=""
              className="animates"
            />
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="w-[150px]">
            <h1 className=" text-[#28e98c] text-7xl">1+</h1>
            <div className="text-gray-500 mt-3">YEARS OF EXPERIENCE</div>
          </div>
          <div className="w-[200px] ">
            <h1 className=" text-[#28e98c] text-7xl">10+</h1>
            <div className="text-gray-500 mt-3">
              PROJECTS COMPLETED ON 3 COUNTRIES
            </div>
          </div>
        </div>
        <div className="lg:py-56 py-20">
          <About />
        </div>
        <div className="mb-36">
          <Resume />
        </div>
        <div className="mb-28">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Details;