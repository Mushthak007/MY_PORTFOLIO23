import React from "react";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { useSelector } from "react-redux";

const Contact = () => {
  const { ColorNameFirst } = useSelector((state) => state.Color);
  return (
    <div>
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <AiFillMail className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">CONTACT</span>
      </div>
      <div className="py-10 mt-4">
        <h1 className="text-white text-3xl lg:text-5xl">
          Let's Work <span style={{ color: ColorNameFirst }}>Together!</span>
        </h1>
      </div>
      <h1 className="text-white text-xl tracking-wider font-extralight">
        mushtak2899@gmail.com
      </h1>
      <div className="py-10">
        <div className="py-7">
          <h1 className="text-white">
            FULL NAME <span className="text-red-500">*</span>
          </h1>
          <input
            type="text"
            placeholder="Your Full Name"
            className="bg-transparent outline-none text-white py-2 placeholder:text-[18px]"
          />
        </div>
        <div className="py-7">
          <h1 className="text-white capitalize">
          company name <span className="text-red-500">*</span>
          </h1>
          <input
            type="text"
            placeholder="Your Company Name"
            className="bg-transparent outline-none text-white py-2 placeholder:text-[18px]"
          />
        </div>
        <div className="py-7">
          <h1 className="text-white">PHONE (OPTIONAL)</h1>
          <input
            type="number"
            placeholder="Your number phone"
            className="bg-transparent outline-none text-white py-2 placeholder:text-[18px]"
          />
        </div>
        <div className="py-7">
          <h1 className="text-white">
            EMAIL <span className="text-red-500">*</span>
          </h1>
          <input
            type="text"
            placeholder="Your email adress"
            className="bg-transparent outline-none text-white py-2 placeholder:text-[18px]"
          />
        </div>
        <div className="py-7">
          <h1 className="text-white">MESSAGE</h1>
          <textarea
            type="text"
            placeholder="Wrire your message here ..."
            className="bg-transparent outline-none text-white py-2 placeholder:text-[18px] w-[300px]"
          />
        </div>
        <div className=" group">
          <button className="flex justify-center gap-2  w-[250px] bg-[#28e98c] duration-500 items-center rounded-full py-3 hover:bg-transparent border border-[#28e98c] group-hover:border-[#28e98c]">
            <AiOutlineMessage
              className="text-black  group-hover:text-[#28e98c] "
              size={20}
            />
            <h1 className="text-black group-hover:text-[#28e98c]">
              SEND MESSAGE
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
