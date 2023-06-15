import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import {
  AiOutlineClose,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import ProfilePic from "../Assets/Profile.png";
import Modal from "react-modal";
import { Color, VideoName, Videos } from "../Data/Video";
import { useDispatch, useSelector } from "react-redux";
import { ColorNames, VideoLink } from "../Redux/Reducer";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const { ColorNameFirst } = useSelector((state) => state.Color);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [colorName, setColorName] = useState("#28e98c");

  const handleClick = (id) => {
    console.log(id);
    const NewData = Color.filter((item) => item.id === id);
    const NewDataColor = NewData.map((item) => item.color);
    console.log(NewDataColor);
    setColorName(NewDataColor);
    dispatch(ColorNames(NewDataColor));
    setIsOpen(false);
  };
  const handleClickVideo = (id) => {
    // window.location.reload()
    console.log(id);
    const NewData = Videos.filter((item) => item.id === id);
    const NewDataColor = NewData.map((item) => item.video);
    dispatch(VideoLink(NewData));
    console.log("mapVideo-->", NewData);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="bg-[#1f1f1f] w-10 h-8 flex justify-center items-center  rounded-r-lg fixed cursor-pointer lg:mt-16"
        onClick={() => setIsOpen(true)}
      >
        <FiSettings className="text-gray-500 animate-spin group " size={20} />
      </div>
      <div className="flex flex-col lg:justify-center lg:h-screen font-mono ">
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            className="w-[340px] lg:w-[900px] h-full bg-black/90 absolute right-0 overflow-y-auto outline-none"
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white px-20 py-5"
              >
                <AiOutlineClose size={40} />
              </button>
            </div>
            <div className="lg:px-20 px-10">
              <h1 className="text-white tracking-wide text-3xl">
                Configuration
              </h1>
              <h1 className="text-white tracking-wide text-sm mt-20">COLORS</h1>
              <div className="grid grid-cols-3 gap-10 lg:grid-cols-8 py-10">
                {Color.map((item, index) => {
                  return (
                    <>
                      <div className="flex " key={index}>
                        <div
                          onClick={() => handleClick(item.id)}
                          className="w-8 h-8 rounded-full bg-[#28e98c] hover:outline-none duration-300 outline outline-2 outline-offset-4 outline-white cursor-pointer"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-5">
                <h1 className="text-white tracking-wider py-10">
                  THREE DIMENSIONAL SHAPES
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  {Videos.map((item, index) => {
                    return (
                      <>
                        <div
                          className="text-white cursor-pointer"
                          key={index}
                          onClick={() => handleClickVideo(item.id)}
                        >
                          {" "}
                          {item.videoName}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.3,
            type: "keyframes",
            stiffness: 120,
          }}
          className="mt-10 lg:mt-0 md:px-10 flex  justify-center px-5 lg:hover:translate-x-4 duration-500 lg:fixed lg:ml-7"
        >
          <div className="w-[750px] lg:w-[350px] px-5 py-5 border border-gray-500 rounded-3xl ">
            <div className="group">
              <div className="flex justify-between items-center">
                <h1
                  className="text-3xl font-extrabold ml-5"
                  style={{ color: ColorNameFirst }}
                >
                  Mushthak
                </h1>
                <h1 className="text-white  text-sm w-28">
                  MERN Stack Developer
                </h1>
              </div>
              <div className="flex justify-center items-center py-5">
                <img
                  src={ProfilePic}
                  className="w-[260px] h-[260px] object-cover rounded-3xl group-hover:rotate-3 duration-500 cursor-pointer "
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center py-5">
                <h1
                  onClick={() =>
                    (window.location = "mailto:mushtak2899@gmail.com")
                  }
                  className="text-white text-xl font-semibold tracking-wide cursor-pointer"
                >
                  mushtak2899@gmail.com
                </h1>
                <h1 className="text-white text-xl font-semibold tracking-wide">
                  Based in Kochi
                </h1>
                <h1 className="text-slate-500 mt-5 text-sm">
                  © {new Date().getFullYear()} Mushthak. All Rights Reserved
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4  ">
              <div className="group">
                <a
                  href="https://github.com/MUSHTHAK2899"
                  target="_blank"
                  className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full  group-hover:border-[#28e98c] cursor-pointer"
                >
                  <BsGithub
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </a>
              </div>
              <div className="group">
                <a
                  href="https://www.linkedin.com/in/mushthak-mohd-00589b226"
                  target="_blank"
                  className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full  group-hover:border-[#28e98c] cursor-pointer"
                >
                  <AiFillLinkedin
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </a>
              </div>
              <div className="group">
                <a
                  href="https://wa.me/+918086966621"
                  target="_blank"
                  className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full  group-hover:border-[#28e98c] cursor-pointer"
                >
                  <AiOutlineWhatsApp
                    className="text-gray-500  group-hover:text-[#28e98c]"
                    size={15}
                  />
                </a>
              </div>
              <div className="group">
                <a
                  href="https://www.instagram.com/mushthak._/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  className="border duration-500  border-gray-500 w-10 h-10 flex justify-center items-center rounded-full group   group-hover:border-[#28e98c] cursor-pointer"
                >
                  <BsInstagram
                    className="text-gray-500  group-hover:text-[#28e98c] "
                    size={15}
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center  mt-7 group">
              <button
                style={{ backgroundColor: ColorNameFirst }}
                className="flex justify-center gap-2 w-[250px]  duration-500 items-center rounded-full py-3 hover:bg-transparent"
              >
                <BsFillCloudDownloadFill className="text-black " size={20} />
                <h1 className="text-black">Download Cv</h1>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
