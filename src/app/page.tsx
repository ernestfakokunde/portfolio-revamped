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
        <div className="drift absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="float-slow absolute right-[-8rem] top-[16rem] h-[28rem] w-[28rem] rounded-full bg-green-500/10 blur-3xl" />
        <div className="pulse-soft absolute left-[-10rem] top-[58rem] h-[28rem] w-[28rem] rounded-full bg-emerald-300/[0.08] blur-3xl" />
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
