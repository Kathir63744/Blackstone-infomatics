"use client";

import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
};

const logos: LogoItem[] = [
  { name: "Catalog", src: "/logos/logo1.png" },
  { name: "Layers", src: "/logos/logo2.png" },
  { name: "Circles", src: "/logos/logo3.png" },
  { name: "Quotient", src: "/logos/logo4.png" },
  { name: "Hourglass", src: "/logos/logo5.png" },
];

export default function LogoSlider() {
  return (
    <section className="relative w-[720px] h-[90px] border-amber-100 py-14 overflow-hidden">

      {/* Center Container */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">

        {/* Fade Left */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Fade Right */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Sliding Track */}
        <div className="flex w-max animate-marquee gap-14">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition duration-300 whitespace-nowrap"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={26}
                height={26}
                className="object-contain"
              />
              <span className="text-gray-400 hover:text-white text-lg font-bold">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}