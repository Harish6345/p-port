"use client"
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workData } from "@/assets/assets";
import { FaLocationArrow } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".work-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".work-container",
          start: "top 80%",
          end: "bottom 80%",
          scrub:true,
          
        },
      }
    );
  }, []);

  return (
    <section id="work" className="work-container px-4 py-12 md:py-20">
      <h2 className="text-center text-3xl font-bold mb-6">My Latest Work</h2>
      <p className="text-center text-lg mb-12">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {workData.map((work,item) => (
          <div
            key={item}
            className="work-card relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={work.bgImage}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <p className="text-gray-500">{work.description}</p>
            </div>
            <a
              href="#"
              className="absolute bottom-4 right-4  bg-blue-400  text-white p-3 rounded-full text-xl flex items-center justify-center hover:bg-lime-500 transition-colors duration-300"
            >
              <FaLocationArrow />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
       <a href="https://github.com/Harish6345"> <button className="px-6 py-2 rounded-full shadow hover:bg-gradient-to-r from-pink-400/40 to-blue-400/40 transition-all duration-500   ">
          Show more →
        </button></a>
      </div>
    </section>
  );
};

export default Work;