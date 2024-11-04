"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-400 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Dibesh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Developer",
                1000,
                "Web Developer",
                1000,
                "Fullstack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I create modern, scalable websites and web apps that combine sleek
            design with powerful functionality.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Download CV
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contact Me
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
