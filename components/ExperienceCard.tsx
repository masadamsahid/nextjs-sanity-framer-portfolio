import React from 'react';
import {motion} from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[80%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="w-16 h-16 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://avatars.githubusercontent.com/u/62916459?v=4"
        alt=""
      />
      
      <div className="px-0 md:px-5">
        <h4 className="text-lg font-light">
          CEO of Wolfrevo
        </h4>
        <p className="font-bold text-md mt-1">Wolfrevo</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-4 w-4 rounded-2"
            src="https://coryrylan.com/assets/images/posts/types/typescript.png"
            alt=""
          />
          <img
            className="h-4 w-4 rounded-2"
            src="https://coryrylan.com/assets/images/posts/types/typescript.png"
            alt=""
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        
        <p className="uppercase py-1 text-gray-300 text-sm">
          Started work... - Ended...
        </p>
        
        <ul className="list-disc space-y-1 ml-5 text-xs">
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
        </ul>
      
      </div>
    </article>
  );
};

export default ExperienceCard;