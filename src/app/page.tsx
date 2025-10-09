import { BooksTitle, BooksDefault, BooksActive, MusicDefault, MusicActive, WorkDefault, WorkActive, OthersDefault, OthersActive } from "@/lib/assets/assets";
import CardHome from "@/components/ui/cardHome";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-8 max-w-xs grid grid-cols-2 m-auto gap-2 md:pt-16 md:grid-cols-2 md:max-w-2xl lg:max-w-4xl lg:grid-cols-3 2xl:max-w-7xl 2xl:grid-cols-5 ">
      <div className="pb-16 text-4xl flex items-center justify-between col-span-2 md:col-span-2 md:text-5xl lg:col-span-3 lg:text-5xl 2xl:col-span-5 2xl:text-6xl ">
        <div className="flex ">
          <div className="font-black">Kallol</div>
          <div className="font-thin">{`'s playground`}</div>
        </div>
        <Button variant={"outline"} className="text-xl cursor-pointer">About me</Button>
      </div>
      <Link href={"/works"} >
        <CardHome title="Work" baseImg={<WorkDefault />} activeImg={<WorkActive />}/>
      </Link>
      <Link href={"/music"} >
        <CardHome title="Music" baseImg={<MusicDefault />} activeImg={<MusicActive />} />
      </Link>
      <Link href={"/books"} >
        <CardHome title="Books" baseImg={<BooksDefault />} activeImg={<BooksActive />}/>
      </Link>
      <Link href={"/design"} >
        <CardHome title="Design" />
      </Link>
      <Link href={"/others"} >
        <CardHome title="Others" baseImg={<OthersDefault />} activeImg={<OthersActive />}/>
      </Link>
      
    </div>
  );
}
