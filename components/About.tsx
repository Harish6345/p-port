"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Type annotations for parameters are not needed anymore
    const animateSection = (selector: string, fromVars: any, toVars: any): void => {
      gsap.fromTo(selector, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    };

    // Apply animations with the animateSection function
    animateSection(".hero", { x: -1000, scale: 0.1 }, { x: 0, duration: 4, ease: "power4.inOut", scale: 1 });
    animateSection(".dog", { opacity: 0, x: 800 }, { x: 0, opacity: 1, duration: 4, stagger: 0.5 });
    animateSection(".kasi", { x: -1000, opacity: 0, scale: 2 }, { x: 0, opacity: 1, scale: 1, duration: 4 });
  }, []);

  return (
    <div id="about" className="h-screen w-full py-10">
      <div className="text-container flex justify-center w-full hero">
        <div className="flex flex-col items-center font-poppins">
          <h1 className="text-2xl">Introduction</h1>
          <p className="text-4xl mt-4 font-semibold">About me</p>
        </div>
      </div>
      <div className="parent flex flex-col lg:flex-row gap-12 pt-20">
        {/* Image Section */}
        <div className="child1 flex-shrink-0">
          <div className="kasi hidden md:block">
            <Image
              src="/me.jpeg"
              alt="owner"
              width={350}
              height={350}
              className="rounded-lg min-w-[400px] cursor-pointer grayscale hover:grayscale-0 object-cover"
            />
          </div>
        </div>
        {/* Text and Info Section */}
        <div className="child2 flex-1 md:leading-[2vw] hero">
          <h1>
            I am a skilled Full Stack Developer with expertise in building
            dynamic web applications. Proficient in both front-end and back-end
            technologies like JavaScript, Node.js, React, and MongoDB. I’ve
            worked with top companies to create scalable, user-friendly
            solutions that fuel growth and innovation.
          </h1>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 hero">
            {infoList.map((item, index) => (
              <div
                className="border rounded-lg flex flex-col gap-4 hover:shadow-xl hover:shadow-blue-300/40 mt-10 p-4 cursor-pointer"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                />
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
              </div>
            ))}
          </div>
          <h1 className="mt-2 hero">Tools I use</h1>
          <div className="flex dog items-center gap-4 mt-4">
            {toolsData.map((item, index) => (
              <div
                key={index}
                className="border max-w-24 sm:w-auto rounded-lg p-3 cursor-pointer hover:bg-gradient-to-t from-sky-300/40 via-yellow-300/30 to-red-300/10"
              >
                <Image src={item} alt="tools" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
