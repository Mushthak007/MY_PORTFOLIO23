import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import ProfilePic from "../Assets/Profile.png";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col font-mono">
        <div className="bg-[#1f1f1f] w-14 h-8 flex justify-center items-center  rounded-r-lg fixed">
          <FiSettings className="text-gray-500 animates group " size={20} />
        </div>
        <div className="mt-10 md:px-10 flex md:flex-none justify-center px-5 lg:hover:translate-x-4 duration-500 lg:fixed">
          <div className="w-[750px] lg:w-[400px] px-5 py-7 border border-gray-500 rounded-3xl ">
            <div className="group">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-3xl font-extrabold ">
                  Mushthak
                </h1>
                <h1 className="text-white  text-sm w-28">
                  MERN Stack Developer
                </h1>
              </div>
              <div className="flex justify-center items-center py-7">
                <img
                  src={ProfilePic}
                  className="w-[280px] h-[300px] object-cover rounded-3xl group-hover:rotate-3 duration-500 cursor-pointer "
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center py-5">
                <h1 className="text-white text-xl font-semibold tracking-wide">
                  mushtak2899@gmail.com
                </h1>
                <h1 className="text-white text-xl font-semibold tracking-wide">
                  Based in Kochi
                </h1>
                <h1 className="text-slate-500 mt-7 text-sm">
                  © 2023 Mushthak. All Rights Reserved
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4  ">
              <div className="group">
                <div className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full  group-hover:border-[#28e98c] cursor-pointer">
                  <BsGithub
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </div>
              </div>
              <div className="group">
                <div className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full  group-hover:border-[#28e98c] cursor-pointer">
                  <BiWorld
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </div>
              </div>
              <div className="group">
                <div className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full group   group-hover:border-[#28e98c] cursor-pointer">
                  <BsInstagram
                    className="text-gray-500  group-hover:text-[#28e98c] "
                    size={15}
                  />
                </div>
              </div>
              <div className="group">
                <div className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full group-hover:border-[#28e98c] cursor-pointer ">
                  <BsTwitter
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center  mt-8 group">
              <button className="flex justify-center gap-2 bg-[#28e98c] w-[250px] duration-500 items-center rounded-full py-3 hover:bg-transparent border border-[#28e98c] group-hover:border-[#28e98c]">
                <HiMail
                  className="text-black  group-hover:text-[#28e98c] "
                  size={20}
                />
                <h1 className="text-black group-hover:text-[#28e98c]">
                  HIRE ME!
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
