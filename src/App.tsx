import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Metrics from "./components/Metrics";
import Methodology from "./components/Methodology";
import Traits from "./components/Traits";
import Vision from "./components/Vision";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Nav />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="metrics">
          <Metrics />
        </div>
        <div id="methodology">
          <Methodology />
        </div>
        <div id="traits">
          <Traits />
        </div>
        <div id="vision">
          <Vision />
        </div>
      </main>
    </div>
  );
}
