"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000000]/95 backdrop-blur-md shadow-lg border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl sm:text-2xl font-bold text-[#e8eaf6] hover:text-[#94a3b8] transition-colors"
            >
              {"<Ernest/>"}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#94a3b8] hover:text-[#e8eaf6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#94a3b8] hover:text-[#e8eaf6] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-[#94a3b8] hover:text-[#e8eaf6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#94a3b8] hover:text-[#e8eaf6] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#94a3b8] hover:text-[#e8eaf6] p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#1a1a1a] bg-[#000000]/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-[#94a3b8] hover:text-[#e8eaf6] hover:bg-[#1a1a1a] px-3 py-2.5 text-base font-medium transition-colors rounded-md bg-[#0a0a0a]/50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-[#94a3b8] hover:text-[#e8eaf6] hover:bg-[#1a1a1a] px-3 py-2.5 text-base font-medium transition-colors rounded-md bg-[#0a0a0a]/50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-[#94a3b8] hover:text-[#e8eaf6] hover:bg-[#1a1a1a] px-3 py-2.5 text-base font-medium transition-colors rounded-md bg-[#0a0a0a]/50"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-[#94a3b8] hover:text-[#e8eaf6] hover:bg-[#1a1a1a] px-3 py-2.5 text-base font-medium transition-colors rounded-md bg-[#0a0a0a]/50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

