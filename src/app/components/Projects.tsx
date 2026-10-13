import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { projects } from "@/app/data/site";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            title="A few things I have brought to life."
            description="A selection of products and experiments. Take a look around."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const isFeatured = Boolean(project.featured);
            const isLive = project.status === "Live";

            return (
              <Reveal
                key={project.name}
                delay={index * 110}
                className={isFeatured ? "sm:col-span-2 xl:col-span-2" : ""}
              >
                <article className="panel group h-full overflow-hidden rounded-[1.5rem]">
                  <div className={`relative overflow-hidden border-b border-white/10 ${isFeatured ? "aspect-[16/7] sm:aspect-[16/6]" : "aspect-[16/9]"}`}>
                    {isFeatured ? (
                      <video
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={project.image}
                        aria-label={`${project.name} preview`}
                      >
                        <source src="/202603222119.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
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

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
                          {isLive ? "Live product" : "Currently evolving"}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-slate-400">
                      {project.impact}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      {isLive ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/10"
                        >
                          <span>Visit live project</span>
                          <span aria-hidden="true" className="ml-2 text-lime-300">Visit ↗</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300">
                          In progress - link coming soon
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



