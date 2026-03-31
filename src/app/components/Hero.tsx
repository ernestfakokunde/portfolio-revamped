import Reveal from "@/app/components/ui/Reveal";
import SocialIcon from "@/app/components/ui/SocialIcon";
import {
  featuredProject,
  heroStats,
  socialLinks,
} from "@/app/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Full-stack developer crafting polished web experiences
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building thoughtful products with clean structure and motion that
            feels alive.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I am Ernest Fakokunde, a developer focused on modern interfaces,
            solid product foundations, and web experiences that feel sharp from
            the first scroll.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Explore products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Let&apos;s build something
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/10 hover:text-white"
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 110}
                className="panel rounded-3xl p-5"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} direction="left" className="relative">
          <div className="panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute right-6 top-6 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
              Latest build
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-3">
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={featuredProject.image}
                >
                  <source src="/202603222119.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Product spotlight
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {featuredProject.name}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                {featuredProject.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={featuredProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/10"
              >
                Open platform
              </a>
            </div>
          </div>

          <div className="float-slow absolute -left-3 top-14 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 shadow-2xl lg:block">
            UI revamp
          </div>
          <div className="pulse-soft absolute -bottom-5 right-8 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50 shadow-2xl lg:block">
            Motion-ready sections
          </div>
        </Reveal>
      </div>
    </section>
  );
}
