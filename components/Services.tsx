"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceData } from "@/assets/assets";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  React.useEffect(() => {
    // GSAP animation for service cards with ScrollTrigger
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 }, // initial state
      {
        opacity: 1,
        y: 0, // final state (animated to position)
        duration: 1, // animation duration
        stagger: 0.6, // stagger effect between items
        ease: "power3.out", // ease out for smoother transitions
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%", // start the animation when the top of the container reaches 80% of the viewport
          end: "bottom 80%", // animation will end when the bottom of the container reaches the bottom of the viewport
          scrub: 1, // scrub the animation with a slight delay (0 = no scrub, 1 = full scrub, you can adjust this)
        },
      }
    );
  }, []);

  return (
    <section id="services" className="services-container py-60 sm:py-10 w-full ">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm md:text-base mb-2">What I Offer</p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">My Services</h2>
        <p className="text-center text-lg md:text-xl mb-12">
          I am a Full stack Web Developer from India, <br /> with 3+ years of experience building multiple projects.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer service-card bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={service.icon}
                alt="icon"
                width={50}
                height={50}
                className="mx-auto mb-4" // Center the image and add margin
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-pink-500 font-medium hover:underline text-sm md:text-base"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
