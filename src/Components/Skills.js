import React from 'react'
import { GiSkills } from "react-icons/gi";
import { Skill } from '../Data/Video';

const Skills = () => {
  return (
    <div>
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <GiSkills className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">MY SKILLS</span>
      </div>
      <div className="py-14">
      <h1 className="text-white text-3xl lg:text-5xl">
          My <span className="text-[#28e98c]" >Advantages</span>
        </h1>
        <div>
            {
                Skill.map((item)=>{
                    return(
                        <div className=''>
                            <img src={item.image} alt="" />
                            <h1>{item.percentage}</h1>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Skills
