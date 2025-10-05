"use client"

import { JSX, ReactNode, useState } from "react";

type cardProps  = {title: string, baseImg?:JSX.Element, activeImg?:JSX.Element}

export default function CardHome({title, baseImg, activeImg}: cardProps) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div
            className={`min-h-[350px] max-h-[350px] border-4 border-black rounded-lg col-span-1 flex flex-col items-center justify-between h-full pt-4 pb-4 transition-all duration-500 cursor-pointer relative overflow-hidden `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {/* Title */}
            <p className={`font-extrabold text-4xl md:text-5xl z-10 transition-all duration-500 ${isHovered ? `text-shadow-lg` : null } `}>{title}</p>

            {/* Image container (ensures both SVGs overlap and animate) */}
            <div className="relative flex items-center justify-center w-full h-[100px]">
                {/* Base image */}
                <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isHovered ? "opacity-0 scale-100" : "opacity-100 scale-100"
                }`}
                >
                {baseImg}
                </div>

                {/* Active (hover) image */}
                <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-100"
                }`}
                >
                {activeImg}
                </div>
            </div>
        </div>
    ) 
}