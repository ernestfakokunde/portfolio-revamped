import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { services } from "@/app/data/site";

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader eyebrow="Services" title="Useful software for the work your business needs to do." description="From a credible first website to the systems behind daily operations, I build around your goals and your users." />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <article className="panel h-full rounded-2xl p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{service.description}</p>
                <p className="mt-4 text-xs leading-5 text-neutral-400"><span className="font-semibold text-neutral-200">Helps with: </span>{service.solves}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs text-lime-100/80">{service.stack}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
