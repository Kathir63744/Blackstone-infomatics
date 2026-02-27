"use client";
import React, { ReactNode } from "react";

type AnimatedBadgeProps = {
  children: ReactNode;
  radius?: string; // e.g., 'full', '2xl', '24px', etc.
  paddingX?: string; // Tailwind spacing or px value
  paddingY?: string;
  className?: string; // extra classes
};

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  radius = "9999px", // default full circle
  paddingX = "16px",
  paddingY = "12px",
  className = "",
}) => {
  return (
    <div
      className={`relative inline-block p-[1px] animated-border ${className}`}
      style={{ borderRadius: radius }}
    >
      <div
        className="relative bg-black backdrop-blur-xl overflow-hidden"
        style={{ borderRadius: radius, padding: `${paddingY} ${paddingX}` }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBadge;