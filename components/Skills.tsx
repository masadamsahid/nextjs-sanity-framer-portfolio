import React from 'react';
import {motion} from "framer-motion";
import Skill from "./Skill";
import {Skill as SkillType} from '../typings';

type Props = {
  skills: SkillType[];
}

const Skills = ({skills}:Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative flex-col xl:flex-row text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-sm md:text-2xl -mr-[20px]">
        Skills
      </h3>
      
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      
      <div className="grid grid-cols-4 gap-2 xl:gap-3">
        {skills.slice(0, skills.length/2).map((skill, i)=>(
          <Skill key={skill._id} skill={skill}/>
        ))}
        {skills.slice(skills.length/2, skills.length).map((skill, i)=>(
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
      
      
    </motion.div>
  );
};

export default Skills;