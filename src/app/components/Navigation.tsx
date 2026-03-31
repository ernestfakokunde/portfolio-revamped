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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold tracking-tight text-white hover:text-cyan-200 sm:text-xl"
          >
            {"<Ernest/>"}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/15"
            >
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
          <div className="panel mt-3 rounded-3xl p-3 md:hidden">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-left text-sm font-medium text-cyan-100"
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
