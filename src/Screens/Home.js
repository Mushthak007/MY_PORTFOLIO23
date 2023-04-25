import React from "react";
import { Videos } from "../Data/Video";
import { Details, Profile, SideTab } from "../Components";

const Home = () => {
  return (
    <div>
      {Videos.map((item, index) => {
        return (
          <div>
            <video
              muted
              autoPlay
              loop
              className="w-full h-full fixed  object-cover left-0 right-0"
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
        );
      })}
      <div className="absolute  lg:flex justify-between h-full w-full py-4 lg:py-8  ">
        <section className="">
          <Profile />
        </section>
        <section>
          <Details />
        </section>
        <section className=" ">
          <SideTab />
        </section>
      </div>
    </div>
  );
};

export default Home;
