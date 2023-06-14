import React from "react";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

const About = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="About">
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <FiUser className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">ABOUT</span>
      </div>
      <div>
        <h1 className="text-white text-2xl lg:text-5xl leading-snug py-5 lg:py-12 mt-4 font-light">
          Development is similar to putting together a puzzle,{" "}
          <span style={{color:ColorNameFirst}}>
            But you get to design the parts yourself.
          </span>
        </h1>
        <h5 className="text-gray-500 leading-normal">
          My approach to web development is built in a profound awareness of the
          delicate interplay between many parts, whether I'm painstakingly
          creating front-end interfaces or fine-tuning back-end databases. Each
          project has its own unique set of chances and problems, and I enjoy
          the chance to put different pieces together to form a unified, useful
          whole in order to produce something truly special, which makes me a
          unique full-stack developer. I've developed my abilities and
          established a reputation as a reliable and creative developer by
          working tirelessly to create beautifully designed websites and mobile
          apps that go above and beyond for my clients. I'm willing to work with
          you and realise your idea if you're looking for a partner who will
          help you create something genuinely extraordinary.
        </h5>
      </div>
    </div>
  );
};

export default About;
