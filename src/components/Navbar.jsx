// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import "../styles/navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    if (!wrapper) {
      console.error("Wrapper not found");
      return;
    }

    const handleScroll = () => {
      const scrolled = wrapper.scrollTop > 50;
      setIsScrolled(scrolled);
    };

    wrapper.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? "navScroll" : ""}>
      <FeatherIcon
        icon="menu"
        id="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
