import Image from "next/image";
import { Music } from "@/lib/assets/assets";

export default function Home() {
  return (
    <div className="pt-8 max-w-xs grid grid-cols-1  m-auto gap-2 min-h-screen md:pt-16 md:grid-cols-2 md:max-w-2xl lg:max-w-4xl lg:grid-cols-3 2xl:max-w-7xl 2xl:grid-cols-5 2xl:grid-rows-5 ">
      <div className="text-4xl flex col-span-1 md:col-span-2 md:text-5xl lg:col-span-3 lg:text-5xl 2xl:col-span-5 2xl:text-6xl">
        <div className="font-black">Kallol</div>
        <div className="font-thin">'s playground</div>
      </div>
      <div className="border-4 border-black rounded-lg col-span-1 row-span-4 2xl:row-span-2"></div>
      <div className="border-4 border-black rounded-lg col-span-1 row-span-4 2xl:row-span-2"></div>
      <div className="border-4 border-black rounded-lg col-span-1 row-span-4 2xl:row-span-2 flex flex-col items-center justify-between h-full pt-4 pb-4">
        <div className="font-black text-5xl">Music</div>
        <Music />
      </div>
      <div className="border-4 border-black rounded-lg col-span-1 row-span-4 2xl:row-span-2"></div>
      <div className="border-4 border-black rounded-lg col-span-1 row-span-4 2xl:row-span-2"></div>
    </div>
  );
}
