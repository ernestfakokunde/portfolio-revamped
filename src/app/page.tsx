import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="drift absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="float-slow absolute right-[-8rem] top-[16rem] h-[26rem] w-[26rem] rounded-full bg-orange-400/12 blur-3xl" />
        <div className="pulse-soft absolute left-[-10rem] top-[58rem] h-[28rem] w-[28rem] rounded-full bg-teal-300/10 blur-3xl" />
      </div>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
