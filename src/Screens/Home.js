import React, { useEffect, useState } from "react";
import { Videos } from "../Data/Video";
import { Details, Profile, SideTab } from "../Components";
import { useSelector } from "react-redux";

const Home = () => {
  const {Video} = useSelector(state => state.Color);
  const [SelectedData,setSelectedData]=useState([])
  console.log("vide0",Video)
  const localStorageData = async()=>{
    let data =await localStorage.getItem('selectedVideo')
    const SelectedData=JSON.parse(data)
    console.log("SelectedData---->",SelectedData)
    setSelectedData(SelectedData)
  }

  useEffect(()=>{
    localStorageData()
  },[])

  return (
    <div>
      {SelectedData.map((item, index) => {
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
      <div className="absolute bg-black/50 w-full lg:flex justify-between py-4 lg:py-0 ">
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
