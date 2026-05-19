"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { book } from "@/lib/types"
import books from "@/data/books.json"
// const books: book[] = 
export default function WorksPage() {
    return (
        <section className="space-y-8 py-8 ">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Books</p>
                <h1 className="text-3xl font-semibold sm:text-4xl">Curated reads</h1>
                <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                    My digital bookshelf.
                </p>
            </div>

            <Carousel
                className="relative"
                opts={{ align: "start", containScroll: "trimSnaps", dragFree: false, skipSnaps: false }}
            >
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />

                <CarouselContent className="flex gap-4">
                    {books.map((book) => (
                        <CarouselItem
                            key={book.title}
                            className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4  min-w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 ease-out sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1rem)] xl:min-w-[calc(20%-1rem)]"
                        >
                            <div className="flex h-full flex-col justify-start gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">#{books.length - books.indexOf(book)}</p>
                                    <h2 className="mt-4 text-2xl font-semibold text-slate-900">{book.title}</h2>
                                    <p className="mt-2 text-sm font-medium text-slate-500">{book.author}</p>
                                </div>
                                <Image src={book.cover} alt={book.title} width={200} height={300} className="mx-auto" />
                                <p className="mt-6 text-sm leading-6 text-slate-600">{book.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}