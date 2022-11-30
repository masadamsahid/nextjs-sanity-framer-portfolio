import React from 'react';
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-sm md:text-2xl -mr-[20px]">
        Experience
      </h3>
      
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80 scrollbar-thin">
        {/* Experience Cards */}
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </motion.div>
  );
};

export default Experience;