"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import LogoSlider from "./LogoSlider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const HeroBanner = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative mt-20 overflow-hidden bg-black">

      {/* ===== METEOR BACKGROUND ===== */}
      <div className="meteor-container">
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 py-24">

        {/* BADGE */}
        <div className="relative w-fit rounded-full p-[1px] animated-border">
          <div className="rounded-full px-8 py-3 bg-[#0b0f1a]/80 backdrop-blur-xl">
            <span className="flow-text text-sm flex items-center gap-2">
         ✨ Transforming Ideas Into Scalable Digital Solutions
        </span>

          </div>
        </div>

        {/* Spotlight Section */}
        <div
          onMouseMove={handleMouseMove}
          className="relative flex justify-center items-center overflow-hidden py-2"
        >
          {/* Base Text */}
          <h1
            className={`${spaceGrotesk.className} absolute text-[60px] leading-tight font-extrabold text-gray-600 pointer-events-none`}
          >
            We Build The Digital Engines that drive
            <br />
            Your Business Growth
          </h1>

          {/* Spotlight Text */}
          <h1
            className={`${spaceGrotesk.className} text-[60px] leading-tight font-extrabold text-white relative`}
            style={{
              WebkitMaskImage: `linear-gradient(
                to right,
                transparent 0%,
                black ${position.x - 150}px,
                black ${position.x + 150}px,
                transparent 100%
              )`,
              maskImage: `linear-gradient(
                to right,
                transparent 0%,
                black ${position.x - 150}px,
                black ${position.x + 150}px,
                transparent 100%
              )`,
            }}
          >
            We Build The Digital Engines that drive
            <br />
            Your Business Growth
          </h1>
        </div>

        <p className="text-[22px] text-[#B9B9B9]">
          We Provide the best technologies around the world with 5+ Years of
          experience. The power <br />
          of personalized messages using analytics to improve results.
        </p>

        {/* Bottom Card */}
        <section className="w-full flex justify-center">
          <div className="w-[90%] max-w-5xl  rounded-2xl px-8 py-5 flex items-center justify-center">
            <div className="flex items-center gap-4">

              {/* Avatars */}
              <div className="flex items-center">
                <img src="/a1.png" className="w-11 h-11 rounded-full border-2 border-black object-cover" />
                <img src="/a2.png" className="w-11 h-11 rounded-full border-2 border-black object-cover -ml-3" />
                <img src="/a3.png" className="w-11 h-11 rounded-full border-2 border-black object-cover -ml-3" />
                <img src="/a4.png" className="w-11 h-11 rounded-full border-2 border-black object-cover -ml-3" />
              </div>

              {/* Rating */}
              <div className="flex flex-col leading-tight">
                <div className="flex text-yellow-400 -mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Trusted by 100+ Clients
                </p>
              </div>

              {/* Button */}
              <button className="group relative flex items-center gap-5.5  py-3 rounded-full 
              bg-linear-to-r from-[#2ED3B7] to-[#1BAF9F] 
              text-white text-lg font-medium 
              shadow-[0_0_40px_rgba(46,211,183,0.25)]
              transition-all duration-300 hover:scale-105 h-12 w-41 ">

                <span className="text-white ml-4 text-[17px]">Get Started</span>

                <div className="w-8  h-8 flex items-center justify-center 
                rounded-full bg-white 
                transition-all duration-300 group-hover:bg-white/60">

                  <ArrowUpRight className="w-5 h-8 text-emerald-400" strokeWidth={2.5} />
                </div>

              </button>

            </div>
          </div>
        </section>

        <LogoSlider/>

      </div>
    </div>
  );
};

export default HeroBanner;
