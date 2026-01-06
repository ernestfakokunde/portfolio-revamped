"use client";

export default function Contact() {
  const email = "ernestfakokunde9@gmail.com"; // Edit this with your email

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#e8eaf6] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 bg-[#2a2a2a] mx-auto mb-4"></div>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-lg p-8 sm:p-12 shadow-2xl">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-[#94a3b8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#e8eaf6] mb-4">
                Email Me
              </h3>
              <p className="text-[#94a3b8] mb-8 text-lg">
                Click the button below to send me an email directly
              </p>
            </div>

            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-[#e8eaf6] font-semibold rounded-lg hover:bg-[#252525] border border-[#2a2a2a] transition-all duration-300 text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {email}
            </button>

            <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
              <p className="text-[#94a3b8] text-sm">
                © {new Date().getFullYear()} Ernest Fakokunde Ayodele. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

