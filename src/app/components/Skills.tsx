import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { skillGroups, workflowPoints } from "@/app/data/site";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="The stack I use to turn ideas into clean, reliable experiences."
            description="From front-end systems to backend delivery, these are the tools I use to build polished digital products."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                What I optimize for
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Better hierarchy, better usability, and stronger product polish.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                I care about how sections flow together, how components scale,
                and how interactions reinforce the brand instead of distracting
                from it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {workflowPoints.map((point, index) => (
                  <Reveal
                    key={point}
                    delay={index * 70}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {point}
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 120} direction="left">
                <div className="panel rounded-[1.75rem] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                    {group.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {group.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
