"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { navigationItems } from "@/app/data/site";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const updateNavigationState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);

    const sectionIds = ["hero", ...navigationItems.map((item) => item.id)];
    const currentPosition = window.scrollY + window.innerHeight * 0.35;

    let currentSection = "hero";

    for (const id of sectionIds) {
      const element = document.getElementById(id);

      if (element && currentPosition >= element.offsetTop) {
        currentSection = id;
      }
    }

    setActiveSection(currentSection);
  });

  useEffect(() => {
    updateNavigationState();
    window.addEventListener("scroll", updateNavigationState, { passive: true });
    window.addEventListener("resize", updateNavigationState);

    return () => {
      window.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${isScrolled ? "border-white/10 bg-[#10120f]/90 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-white/[0.08] bg-[#10120f]/60 backdrop-blur-lg"}`}>
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white hover:text-lime-200 sm:text-base"
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-lime-300 text-xs font-bold text-neutral-950">E</span>
            Ernest <span className="font-normal text-neutral-500">Fakokunde</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-xl px-3.5 py-2 text-[13px] font-medium ${
                    isActive
                      ? "bg-white/[0.08] text-lime-100"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button onClick={() => scrollToSection("contact")} className="ml-2 rounded-xl bg-lime-300 px-4 py-2 text-[13px] font-semibold text-neutral-950 hover:-translate-y-0.5 hover:bg-lime-200">
              Let&apos;s talk
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#10120f]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                      isActive
                      ? "bg-lime-300/10 text-lime-100"
                      : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-1 block w-full rounded-xl bg-lime-300 px-4 py-3 text-left text-sm font-semibold text-neutral-950"
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
