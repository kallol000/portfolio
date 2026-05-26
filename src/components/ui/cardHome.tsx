"use client";

import { JSX, useEffect, useState } from "react";

type CardProps = {
  title: string;
  baseImg?: JSX.Element;
  activeImg?: JSX.Element;
};

export default function CardHome({
  title,
  baseImg,
  activeImg,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    setCanHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleMouseEnter = () => {
    if (canHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (canHover) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="min-h-[400px] md:min-h-[350px] shadow-xl border bg-slate-100 rounded-lg col-span-1 flex flex-col items-center h-full pt-4 pb-4 transition-all duration-500 cursor-pointer relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title */}
      <p
        className={`font-semibold text-4xl z-10 transition-all duration-500 ${
          isHovered ? "text-shadow-lg" : ""
        }`}
      >
        {title}
      </p>

      {/* Image container */}
      <div className="relative flex items-center w-full h-full">
        {/* Base image */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center transition-all duration-500 ${
            isHovered
              ? "opacity-0 scale-100"
              : "opacity-100 scale-100"
          }`}
        >
          {baseImg}
        </div>

        {/* Hover image */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center transition-all duration-500 ${
            isHovered
              ? "opacity-100 scale-100"
              : "opacity-0 scale-100"
          }`}
        >
          {activeImg}
        </div>
      </div>
    </div>
  );
}