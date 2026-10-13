import Reveal from "@/app/components/ui/Reveal";
import SocialIcon from "@/app/components/ui/SocialIcon";
import { heroStats, socialLinks } from "@/app/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[82svh] items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.9)]" />
            Abuja, Nigeria <span className="text-neutral-700">/</span> Available for projects
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem]">
            Hi, I&apos;m Ernest, a <span className="text-lime-300">creative</span> developer.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
            I bring ideas to life on the web, blending thoughtful engineering with a sharp eye for design.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-lime-200/40 hover:bg-white/[0.08]"
            >
              Let&apos;s build something
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-neutral-300 hover:-translate-y-0.5 hover:border-lime-200/30 hover:bg-white/[0.08] hover:text-white"
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>

          <div className="mt-9 grid gap-3 text-left sm:grid-cols-3">
            {heroStats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 110}
                className="panel rounded-2xl p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-300">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
