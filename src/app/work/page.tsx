import Link from "next/link"
// import { workItems } from "@/lib/data/work"
import work from "@/data/work.json"
import { Button } from "@/components/ui/button"

export default function WorksPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Work</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">My work</h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Explore what I do at my job and the applications I have built.
        </p>
      </div>

      <div className="grid  gap-6 md:grid-cols-2 xl:grid-cols-3">
        {work.map((item) => (
          <Link
            key={item.name}
            href={`/work/${item.slug}`}
            // target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.type}</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                View details
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">{item.name}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>

            <div className=" mt-6 flex flex-wrap gap-2 min-w-full justify-between items-center ">
              <div className="flex flex-wrap flex-start gap-2 items-center">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-end gap-2">
                <Button variant="outline" size="sm" className="ml-auto">
                  View Source
                </Button>

                <Button variant="outline" size="sm" className="ml-auto">
                  Visit
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
