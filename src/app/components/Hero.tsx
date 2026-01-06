"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [latestProject, setLatestProject] = useState({
    name: "Spectra Invents",
    description: "An inventory app built for smms and business to manage sales and inventory",
    image: "/inventory.png",
    url: "https://spectra-invents.vercel.app/",
    languages: ["React", "TypeScript", "Tailwind CSS","express"],
  });

  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/ernestfakokunde", 
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      )
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/ernest-fakokunde-53713a336a", 
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      )
    },
    { 
      name: "Twitter", 
      url: "https://x.com/CODE_WITH_AYO", 
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      )
    },
    { 
      name: "Email", 
      url: "mailto:ernestfakokunde9@gmail.com", 
      icon: (
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
      )
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background gradient effect - pure black */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mt-2 font-bold mb-4 text-[#e8eaf6]">
            Hello, I'm Ernest Fakokunde
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#94a3b8] mb-6">
            A Full Stack Developer
          </p>
          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 leading-relaxed">
            Building modern, clean, and pixel-perfect solutions. Passionate about creating 
            exceptional digital experiences through code and design.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#94a3b8] hover:text-[#e8eaf6] hover:border-[#3a3a3a] hover:bg-[#252525] transition-all duration-300"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Latest Project Showcase */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8eaf6] mb-2">
              Latest Project
            </h2>
            <div className="w-24 h-0.5 bg-[#2a2a2a] mx-auto"></div>
          </div>

          <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg p-6 sm:p-8 shadow-2xl hover:shadow-[#1a1a1a]/50 transition-all duration-300 hover:border-[#2a2a2a]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#e8eaf6] mb-4">
                  {latestProject.name}
                </h3>
                <p className="text-[#94a3b8] mb-6 text-base sm:text-lg leading-relaxed">
                  {latestProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {latestProject.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#1a1a1a] text-[#94a3b8] rounded-md text-sm font-medium border border-[#2a2a2a]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <a
                  href={latestProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#1a1a1a] text-[#e8eaf6] font-semibold rounded-lg hover:bg-[#252525] border border-[#2a2a2a] transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#1a1a1a]">
                  {latestProject.image ? (
                    <Image
                      src={latestProject.image}
                      alt={latestProject.name}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#2a2a2a]">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm text-[#3a3a3a]">Project Image</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

