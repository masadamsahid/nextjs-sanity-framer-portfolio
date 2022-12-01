import React from 'react';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {SubmitHandler, useForm} from "react-hook-form";
import {PageInfo} from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo;
}

const ContactMe = ({pageInfo}: Props) => {
  
  const {register, handleSubmit} = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adamgamtenk@email.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };
  
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-sm md:text-2xl -mr-[20px]">
        Contact Me
      </h3>
      
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse"/>
            <p className="text-lg">+{pageInfo.phoneNumber}</p>
          </div>
          
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse"/>
            <p className="text-lg">{pageInfo.email}</p>
          </div>
          
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse"/>
            <p className="text-lg">{pageInfo.address}</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder='Name' className="contactInput" type="text"/>
            <input {...register('email')} placeholder='Email' className="contactInput" type="email"/>
          </div>
          
          <input {...register('subject')} placeholder='Subject' className="contactInput" type="text"/>
          
          <textarea {...register('message')} placeholder='Message' className="contactInput"/>
          <button type='submit' className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;