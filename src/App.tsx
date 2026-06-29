import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
