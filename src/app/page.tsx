import { BooksTitle, BooksDefault, BooksActive, Music } from "@/lib/assets/assets";
import CardHome from "@/components/ui/cardHome";

export default function Home() {
  return (
    <div className="pt-8 max-w-xs grid grid-cols-1 m-auto gap-2 md:pt-16 md:grid-cols-2 md:max-w-2xl lg:max-w-4xl lg:grid-cols-3 2xl:max-w-7xl 2xl:grid-cols-5 ">
      <div className="pb-16 text-4xl flex col-span-1 md:col-span-2 md:text-5xl lg:col-span-3 lg:text-5xl 2xl:col-span-5 2xl:text-6xl">
        <div className="font-black">Kallol</div>
        <div className="font-thin">{`'s playground`}</div>
      </div>
      <CardHome title="Work" />
      <CardHome title="Music" />
      <CardHome title="Books" baseImg={<BooksDefault />} activeImg={<BooksActive />}/>
      <CardHome title="Design" />
      <CardHome title="Others" />
      
    </div>
  );
}
