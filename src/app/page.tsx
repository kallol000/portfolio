import { BooksTitle, BooksDefault, BooksActive, MusicDefault, MusicActive, WorkDefault, WorkActive, OthersDefault, OthersActive } from "@/lib/assets/assets";
import CardHome from "@/components/ui/cardHome";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    // <div className="pt-8 max-w-xs grid grid-cols-2 m-auto gap-2 md:pt-16 md:grid-cols-2 md:max-w-2xl lg:max-w-4xl lg:grid-cols-3 2xl:max-w-7xl 2xl:grid-cols-5 ">
    <div className="pt-8 max-w-xs  m-auto gap-2 flex flex-col  md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl ">
      <div className="pb-16 text-4xl flex items-start justify-between col-span-2 md:col-span-2 md:text-5xl lg:col-span-3 lg:text-5xl 2xl:col-span-5 2xl:text-6xl ">
        <div className="flex flex-col  md:flex-row">
          <div className="font-black">{`Kallol's`} &nbsp;</div>
          <div className="font-thin">{`playground`}</div>
        </div>
        <Button variant={"outline"} className="text-xl cursor-pointer">About me</Button>
      </div>
      <Carousel opts={{ align: "center", loop: false, containScroll: "trimSnaps" }}>
        <CarouselContent  >
          <CarouselItem key={0} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5  rounded-3xl ">
            <Link href={"/work"} >
              <CardHome title="Work" baseImg={<WorkDefault />} activeImg={<WorkActive />} />
            </Link>
          </CarouselItem>
          <CarouselItem key={1} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5  rounded-3xl ">
            <Link href={"/music"} >
              <CardHome title="Music" baseImg={<MusicDefault />} activeImg={<MusicActive />} />
            </Link>
          </CarouselItem>
          <CarouselItem key={2} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5  rounded-3xl ">
            <Link href={"/books"} >
              <CardHome title="Books" baseImg={<BooksDefault />} activeImg={<BooksActive />} />
            </Link>
          </CarouselItem>
          <CarouselItem key={3} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5   rounded-3xl ">
            <Link href={"/design"} >
              <CardHome title="Design" />
            </Link>
          </CarouselItem>
          <CarouselItem key={4} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5  rounded-3xl ">
            <Link href={"/others"} >
              <CardHome title="Others" baseImg={<OthersDefault />} activeImg={<OthersActive />} />
            </Link>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

    </div>
  );
}
