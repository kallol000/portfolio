import Link from "next/link"
import { notFound } from "next/navigation"
import { workItems } from "@/lib/data/work"

interface WorkPageProps {
    params: {
        slug: string
    }
}

export default function WorkItemPage({ params }: WorkPageProps) {
    const item = workItems.find((workItem) => workItem.slug === params.slug)

    if (!item) {
        notFound()
    }

    return (
        <section className="space-y-8 ">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/work" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                    ← Back to work
                </Link>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-500">
                    {item.category}
                </span>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{item.title}</h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{item.details}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Summary</p>
                            <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Highlights</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {item.highlights.map((highlight) => (
                                    <span key={highlight} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
