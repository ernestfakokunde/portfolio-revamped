"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#e8eaf6] mb-4">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-[#2a2a2a] mx-auto mb-4"></div>
        </div>

        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg p-8 sm:p-12 shadow-2xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              Hello i'm Ernest Fakokunde a Full Stack developer and creator. I'm a passionate about creating web applications that are not only functional but also visually appealing and user-friendly.
            </p>

            <p className="text-[#cbd5e1] text-lg leading-relaxed mb-6">
               i'm a student of Federal University of Technology, Minna and i'm currently pursuing a degree in computer science.
            </p>
            <p className="text-[#cbd5e1] text-lg leading-relaxed">
               I'm currently working and collaborate with companies and individuals to create web applications that are not only functional but also visually appealing and user-friendly. i create web applications using the latest technologies and frameworks to ensure that the applications are not only functional but also visually appealing and user-friendly.
            </p>
          </div>

          {/* Personal Details Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-[#e8eaf6] font-semibold mb-3">Location</h3>
              <p className="text-[#94a3b8]">Abuja, Nigeria</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-[#e8eaf6] font-semibold mb-3">Email</h3>
              <p className="text-[#94a3b8]">ernestfakokunde9@gmail.com</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-[#e8eaf6] font-semibold mb-3">Education</h3>
              <p className="text-[#94a3b8]">B-tech in Computer Science {"in progress"}</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <h3 className="text-[#e8eaf6] font-semibold mb-3">Experience</h3>
              <p className="text-[#94a3b8]">Worked on various projects and collaborated with open source communities to create scalable and efficient web applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

