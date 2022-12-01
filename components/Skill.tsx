import React from 'react';
import {motion} from "framer-motion";
import {Skill as SkillType} from "../typings";
import {urlFor} from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
}

const Skill = ({directionLeft, skill}:Props) => {
  return (
    <div title={`${skill.title} - ${skill.progress}%`} className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{duration: .5}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border-none object-cover w-12 h-12 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
  
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 xl:w-16 xl:h-16 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;