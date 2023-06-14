import React from "react";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const SideTab = () => {
  return (
<div className="flex items-center h-screen">
<div className="border px-4  py-8 hidden xl:fixed right-10  border-gray-500 rounded-full xl:flex flex-col gap-y-8">
      <a href="#Home" >
        <FaHome className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23}/>
      </a>
      <a href="#About">
        <FiUser className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </a>
      <a href="#Resume">
        <BsCalendar3 className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </a>
      <a href="#Services">
        <AiOutlineCode className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23}/>
      </a>
      <a href="#Skills">
        <GiSkills className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </a>
      <a href="#Project">
        <GiNotebook className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </a>
      <a href="#Contact">
        <AiFillMail className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </a>
    </div>
</div>
  );
};

export default SideTab;
