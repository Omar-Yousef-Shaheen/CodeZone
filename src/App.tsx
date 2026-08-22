import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";
import { handleSectionNavigation, initializeRootScroll } from "./utils/sectionNavigation";

export default function App() {
  useEffect(() => initializeRootScroll(), []);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          handleSectionNavigation(event, { focusTarget: true });
        }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustedBrands />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
