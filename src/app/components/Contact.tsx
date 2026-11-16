import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SocialIcon from "@/app/components/ui/SocialIcon";
import ContactForm from "@/app/components/ContactForm";
import { contactLinks, socialLinks } from "@/app/data/site";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Have a project in mind? Let’s build something useful."
            description="Share a little about your business, product idea, or workflow. I’ll get back to you by email."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200/80">
                  Available for freelance projects
                </p>
                <h3 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let’s solve a real business problem with software.
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you need a business website, a custom application, or support on an agency build, send an enquiry and tell me what you need.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:ernestfakokunde9@gmail.com"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-100"
                  >
                    Email me
                  </a>
                  <a
                    href="https://github.com/ernestfakokunde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                  >
                    View GitHub
                  </a>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-cyan-200/30 hover:bg-white/[0.08]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 break-all text-base font-medium leading-6 text-white">
                        {item.value}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <Reveal direction="left" delay={200}>
                <ContactForm />
              </Reveal>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
            <p>
              Copyright {new Date().getFullYear()} Ernest Fakokunde Ayodele. All
              rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/10 hover:text-white"
                  aria-label={item.label}
                >
                  <SocialIcon icon={item.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

