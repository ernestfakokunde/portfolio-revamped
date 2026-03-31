import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { aboutCards, aboutParagraphs } from "@/app/data/site";

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
          <SectionHeader
              eyebrow="About"
              title="A developer who cares about both how a product works and how it feels."
              description="I build modern web experiences with a strong eye for structure, usability, and visual polish."
            />
            <div className="panel rounded-[2rem] p-8 sm:p-10">
              <div className="space-y-6">
                {aboutParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Product-minded execution",
                  "Responsive front-end craft",
                  "Reliable full-stack delivery",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {aboutCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 110} direction="left">
                <div className="panel rounded-[1.75rem] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {card.value}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={420} direction="left">
              <div className="panel rounded-[1.75rem] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Working approach
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  I like products that need both visual polish and thoughtful
                  implementation, especially when a platform needs a clearer
                  structure, stronger motion, or a sharper front-end identity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
