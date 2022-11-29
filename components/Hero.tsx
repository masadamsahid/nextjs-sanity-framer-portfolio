import React from 'react';
import {Cursor, TypewriterHelper, useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {}

const links = [
  {name: "About", link: "#about"},
  {name: "Experience", link: "#experience"},
  {name: "Skills", link: "#skills"},
  {name: "Projects", link: "#projects"},
];

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Masadamsahid",
      "full-stuck-developer🤪.tsx",
      "<MyFavourite drink={🍵}/>",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle/>
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/62916459?v=4"
      />
      
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px] tracking-[7px]">
          Software Engineer
        </h2>
        <h1 className="font-semibold lg:text-6xl md:text-5xl text-2xl px-5">
          <span className="sm:mr-3 mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
  
        <div className="pt-5">
          {links.map((link) => (
            <Link key={link.name} href={link.link}>
              <button className="heroButton">{link.name}</button>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Hero;