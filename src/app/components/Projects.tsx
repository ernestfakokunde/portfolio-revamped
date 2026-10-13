import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { projects } from "@/app/data/site";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            title="A few things I have brought to life."
            description="Products and experiments built with care."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isFeatured = Boolean(project.featured);
            const isLive = project.status === "Live";

            return (
              <Reveal key={project.name} delay={Math.min(index * 60, 300)}>
                <article className="panel group h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-black/30">
                    {isFeatured ? (
                      <video
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-200 backdrop-blur-md">
                      {isLive ? "Live" : "In progress"}
                    </span>
                  </div>

                  <div className="flex min-h-[205px] flex-col p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {project.name}
                      </h3>
                      {isFeatured && (
                        <span className="shrink-0 rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-lime-200">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-5 text-neutral-400">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-neutral-400"
                        >
                          {item}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-1 py-1 text-[10px] text-neutral-500">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto pt-4">
                      {isLive ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-200 hover:text-lime-200"
                        >
                          {project.href.includes("github.com") ? "View on GitHub" : "Visit project"}
                          <span aria-hidden="true" className="text-lime-300">↗</span>
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-neutral-500">
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
