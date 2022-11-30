import React from 'react';
import {motion} from "framer-motion";

type Props = {}

const projects = [1, 2, 3, 4, 5];

const Projects = ({}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-sm md:text-2xl -mr-[20px]">
        Projects
      </h3>
      
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{y: -300, opacity: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: .5,duration: 1.2}}
              viewport={{once: true}}
              className='max-h-40'
              src="https://coryrylan.com/assets/images/posts/types/typescript.png"
              alt=""
            />
            
            <div className="space-y-10 px-0 md:px-10 max-w-2xl">
              <h4 className="text-md font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}:</span> UPS
                Clone
              </h4>
              
              <p className="text-sm text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dicta dolorem eaque eum, eveniet
                expedita magnam neque nihil non obcaecati sapiente sequi sit totam voluptas!
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"/>
    </motion.div>
  );
};

export default Projects;