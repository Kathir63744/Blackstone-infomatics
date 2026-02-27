"use client";

import Image from "next/image";

interface TechCardProps {
  logo: string;
  title: string;
}

export default function TechCard({ logo, title }: TechCardProps) {
  return (
    <div className="relative w-32 h-28 rounded-2xl p-[1px] animated-border hover:scale-105 transition-all duration-300">

      <div className="w-full h-full rounded-2xl bg-gradient-to-br  from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl flex flex-col items-center justify-center gap-3 border border-white/5">

        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />

        <span className="text-sm text-gray-300">
          {title}
        </span>

      </div>
    </div>
  );
}