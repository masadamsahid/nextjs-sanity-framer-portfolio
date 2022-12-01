import React from 'react';
import {motion} from "framer-motion";
import {Experience} from "../typings";
import {urlFor} from "../sanity";

type Props = {
  experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[80%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="w-16 h-16 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      
      <div className="px-0 md:px-5">
        <h4 className="text-lg font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-md mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              title={tech.title}
              key={tech._id}
              className="h-4 w-4 md:h-8 md:w-8 rounded-2"
              src={urlFor(tech.image).url()}
              alt={tech.title}
            />
          ))}
        </div>
        
        <p className="uppercase py-1 text-gray-300 text-sm">
          {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        
        <div className="max-h-40 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400">
          <ul className="list-disc space-y-1 ml-5 text-xs">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      
      </div>
    </article>
  );
};

export default ExperienceCard;