"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "REST APIs", "Database"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Postman", "Docker"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#e8eaf6] mb-4">
            Skills
          </h2>
          <div className="w-24 h-0.5 bg-[#2a2a2a] mx-auto mb-4"></div>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg p-8 hover:border-[#2a2a2a] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#e8eaf6] mb-6 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-[#1a1a1a] text-[#94a3b8] rounded-lg text-sm font-medium border border-[#2a2a2a] hover:border-[#3a3a3a] hover:text-[#e8eaf6] hover:bg-[#252525] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

