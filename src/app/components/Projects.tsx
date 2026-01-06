"use client";

import { useState } from "react";
import Image from "next/image";

// Project data structure - you can edit this later
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  languages: string[];
}

export default function Projects() {
  // Sample projects - you can edit these later
  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: "Dev Connect",
      description: "A social and project marketplace Full stack application",
      image: "/devconnect.png",
      url: "https://dev-connect-three-ebon.vercel.app",
      languages: ["React", "TypeScript"],
    },
    {
      id: 2,
      name: "Spectra Invents",
      description: "A fullstack inventory app for managing roducts and inventory. this is customly built for small business and sme's",
      image: "/inventory.png",
      url: "https://spectra-invents.vercel.app",
      languages: ["Next.js", "Tailwind CSS", "Express.js", "Chart.js"],
    },
    {
      id: 3,
      name: "Virtual R Landing page",
      description: "This is a landing page for a virtual reality company. This prpject displays clean Ui and visual experience",
      image: "/virtualr.png",
      url: "#",
      languages: ["React.js", "Tailwind CSS"],
    },
    {
      id: 4,
      name: "Coca Cola Landing Page",
      description: "This is a redesign of the coca cola landing page. This project displays clean Ui and visual experience",
      image: "/cocacola.png",
      url: "https://coca-cola-three.vercel.app",
      languages: ["React.js", "Tailwind CSS"],
    },
    {
      id: 5,
      name: "Campus Connect {In Progress}",
      description: "This project is a platform for students to connect with each other and find study groups and departments and also find faculties with verified links",
      image: "/campus.png",
      url: "#",
      languages: ["Next.js", "Tailwind CSS", "MongoDB"],
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#e8eaf6] mb-4">
            Projects
          </h2>
          <div className="w-24 h-0.5 bg-[#2a2a2a] mx-auto mb-4"></div>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A collection of my recent work and projects
          </p>
        </div>

        {/* Horizontal Scrollable Project Gallery with Staggered Layout */}
        <div className="overflow-x-auto pb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 min-w-max items-start">
            {projects.map((project, index) => {
              // Staggered vertical positioning - alternating up and down
              const offset = index % 2 === 0 ? "mt-0" : "mt-8 sm:mt-10 lg:mt-12";
              return (
              <div
                key={project.id}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a1a1a]/50 group cursor-pointer ${offset}`}
                onClick={() => {
                  if (project.url && project.url !== "#") {
                    window.open(project.url, "_blank");
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[240px] bg-[#000000] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#2a2a2a] group-hover:text-[#3a3a3a] transition-colors">
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
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#e8eaf6] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#94a3b8] mb-3 line-clamp-2 text-xs sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-[#1a1a1a] text-[#94a3b8] rounded text-xs font-medium border border-[#2a2a2a]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="text-[#94a3b8] hover:text-[#e8eaf6] font-medium transition-colors text-xs sm:text-sm">
                    View Project →
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#334155]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

