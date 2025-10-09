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
            className={`min-h-[300px] max-h-[300px] shadow-xl border-1 bg-slate-100 rounded-lg col-span-1 flex flex-col items-center h-full pt-4 pb-4 transition-all duration-500 cursor-pointer relative overflow-hidden `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {/* Title */}
            <p className={`font-extrabold text-4xl  z-10 transition-all duration-500  ${isHovered ? `text-shadow-lg` : null } `}>{title}</p>

            {/* Image container (ensures both SVGs overlap and animate) */}
            <div className="relative flex items-center w-full h-full">
                {/* Base image */}
                <div
                className={`absolute inset-x-0 bottom-0 flex items-center  transition-all duration-500 ${
                    isHovered ? "opacity-0 scale-100" : "opacity-100 scale-100"
                }`}
                >
                {baseImg}
                </div>

                {/* Active (hover) image */}
                <div
                className={`absolute inset-x-0 bottom-0 flex items-center transition-all duration-500 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-100"
                }`}
                >
                {activeImg}
                </div>
            </div>
        </div>
    ) 
}