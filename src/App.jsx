// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import useScrollEffects from "./scripts";

function App() {
  useScrollEffects();
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <a
        id="goTop"
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Mencegah perubahan URL
          document
            .querySelector(".wrapper")
            .scrollTo({ top: 0, behavior: "smooth" }); // Scroll halus ke atas
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </>
  );
}

export default App;
