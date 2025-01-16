"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import htg from "../public/me.jpeg"; // Ensure you have an image or path
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Navbar from "./Navbar";



const Lazy = () => {
  useEffect(() => {
    gsap.fromTo(
      ".lazy",
      {
        x: -1000,
        scale: 2,
      },
      {
        x: 0,
        duration: 3,
        ease: "elastic.inOut",
        scale: 1,
      }
    );
  }, []);

  return (
     <div className="h-screen w-full ">
      <Navbar/>
    <div className="flex flex-col justify-center items-center py-10 font-poppins gap-8">
      <Image className="max-w-32 lazy rounded-full" src={htg} alt="owner" />
      <h1 className="lazy">Hi! I’m Meduru Harish 👋🏻</h1>
      <div className="text-center">
        <h1 className="typewriter uppercase text-[1.3rem] md:text-[2rem] font-bold lazy">
          full stack web developer
        </h1>
        <h1 className="text-2xl lazy">From India.</h1>
        <h1 className="lazy mt-4 font-Nunito_Sans">
          I am Full stack web developer more than 3 + years of experience <br />{" "}
          and Build Multiple projects.
        </h1>
        <div className="buttons-container flex gap-4 items-center justify-center mt-6 lazy">
          <a href="https://www.linkedin.com/in/meduruharish/"><button className="border p-3 rounded-full flex items-center gap-2 bg-black text-white hover:scale-105 duration-300">Connect with me <FaArrowRight /></button></a>
       <a href="/resume.pdf"><button className="border p-3 rounded-full font-Nunito_Sans flex gap-2 items-center hover:scale-105 duration-300 ">My Ressume <FaDownload  /></button></a>   
        </div>
      
      </div>
    </div>
    </div>
  );
};

export default Lazy;
