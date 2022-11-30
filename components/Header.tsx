import React from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{x: -500, opacity: 0, scale: .5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://www.youtube.com/@masadamsahid"
          fgColor='gray'
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@masadamsahid"
          fgColor='gray'
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@masadamsahid"
          fgColor='gray'
          bgColor="transparent"
        />
      </motion.div>
      
      <Link href='#contact-me'>
        <motion.div
          initial={{x: 500, opacity: 0, scale: .5}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5}}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className="uppercase sm:block hidden text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
