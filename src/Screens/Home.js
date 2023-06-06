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
    const SelectedDatas=JSON.parse(data)
    console.log("SelectedData---->",SelectedDatas)
    setSelectedData(SelectedDatas==null?Video:SelectedDatas)
  }

  useEffect(()=>{
    localStorageData()
  },[])

  return (
    <>
      {SelectedData.map((item, index) => {
        return (
          <div key={index}>
            <video
              muted
              autoPlay
              loop
              className="w-full h-full fixed  object-cover left-0 right-0"
            >
              <source src={item?.video} type="video/mp4" />
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
    </>
  );
};

export default Home;
