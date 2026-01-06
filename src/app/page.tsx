import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e8eaf6]">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
