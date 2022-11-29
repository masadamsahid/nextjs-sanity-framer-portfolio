import React from 'react';
import {motion} from "framer-motion";

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl -mr-[20px]">
        About
      </h3>
      
      <motion.img
        initial={{y: -200, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.2}}
        src="https://img.freepik.com/premium-vector/howling-wolf-standing-hill-with-panoramic-landscape-mountains-forest-beautiful-sunset_480900-263.jpg?w=740"
        className=" flex-shrink-0 -mb-20 md:mb-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[360px]"
      />
      
      <div className="space-y-5 px-10 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores autem beatae commodi cupiditate
          deserunt dicta dignissimos, dolor earum et eum id illum impedit in ipsa magni neque nostrum nulla odio quam
          quas quidem recusandae sapiente sequi tempora velit voluptates.
        </p>
      </div>
    
    </motion.div>
  );
};

export default About;