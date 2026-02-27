"use client";
import { useState } from "react";

interface Props {
  text: string;
  className?: string;
}

export default function SpotlightText({ text, className }: Props) {
  const [position, setPosition] = useState({ x: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative inline-block"
    >
      {/* Base Grey Text */}
      <h1
        className={`absolute inset-0 text-gray-600 pointer-events-none select-none ${className}`}
      >
        {text}
      </h1>

      {/* Spotlight White Text */}
      <h1
        className={`relative text-white ${className}`}
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
        {text}
      </h1>
    </div>
  );
}