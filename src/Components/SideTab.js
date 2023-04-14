import React from "react";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";

const SideTab = () => {
  return (
<div className="">
<div className="border px-4  py-8 hidden xl:fixed right-10 top-[300px] border-gray-500 rounded-full xl:flex flex-col gap-y-8">
      <div>
        <FaHome className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23}/>
      </div>
      <div>
        <FiUser className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </div>
      <div>
        <BsCalendar3 className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </div>
      <div>
        <AiOutlineCode className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23}/>
      </div>
      <div>
        <GiSkills className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </div>
      <div>
        <GiNotebook className="text-slate-200 hover:text-[#28e98c]  cursor-pointer" size={23} />
      </div>
    </div>
</div>
  );
};

export default SideTab;
