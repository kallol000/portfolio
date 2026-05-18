"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { book } from "@/lib/types"
const books: book[] = [
    {
        title: "Pachinko",
        cover: '/pachinko.jpg',
        author: "Min Jin Lee",
        description: "A family's journey through three generations in Korea and Japan exploring themes of love, identity and resilience. It's tragic  and heartwarming and an uninterruted page-turner.",
    },
    {
        title: "Book Lovers",
        cover: '/book-lovers.jpg',
        author: "Emily Henry",
        description: "A delightful romantic novel that's witty from start till the end. I wanted to fall in love after reading this book.",
    },
    {
        title: "Homegoing",
        cover: '/homegoing.jpg',
        author: "Yaa Gyasi",
        description: "Absoultely devastating parellal saga of two half sisters and their descendants through slavery and colonialism in Ghana and America. ",
    },
    {
        title: "Underground Railroad",
        cover: '/underground-railroad.jpg',
        author: "Colson Whitehead",
        description: "Cora leaves a trail of blood wherever she goes. An epic adventure of escape from her owner through the underground railroad, stemming from the idea that her mother also escaped successfully.",
    },
    {
        title: "Never Let me Go",
        cover: '/never-let me-go.jpg',
        author: "Kazuo Ishiguro",
        description: "A tale of hope that eventually tragic story of love and loss. Narrated in first person by Kathy, a human clone and her life through the years. The story keeps its readers guessing until the very end and the ending is a devastating reflection on ethics, innovation and humanity.",
    },
]

export default function WorksPage() {
    return (
        <section className="space-y-8 py-8">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Books</p>
                <h1 className="text-3xl font-semibold sm:text-4xl">Curated reads</h1>
                <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                    Browse a selection of favorite books with responsive carousel layout for mobile, tablet, and desktop screens.
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