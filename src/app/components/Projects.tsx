import Image from "next/image";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { projects } from "@/app/data/site";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Products"
            title="Live platforms and product experiences presented with clearer structure."
            description="A selection of live products and evolving platforms built with modern interfaces, strong UX, and reliable implementation."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const isLive = project.status === "Live";

            return (
              <Reveal
                key={project.name}
                delay={index * 110}
                className={isFeatured ? "md:col-span-2 xl:col-span-2" : ""}
              >
                <article className="panel group h-full overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                        {project.status}
                      </span>
                      {isFeatured ? (
                        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                          Highlight
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
                          {isLive ? "Live product" : "Currently evolving"}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {project.impact}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      {isLive ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/10"
                        >
                          Open product
                        </a>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300">
                          In progress
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
