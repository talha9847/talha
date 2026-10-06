import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EngineeringProof from "./components/EngineeringProof";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <Projects />
        <EngineeringProof />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}
