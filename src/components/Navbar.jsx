import { useState, useEffect, useRef } from "react";
import FeatherIcon from "feather-icons-react";
import "../styles/navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav id="navbar" className={isScrolled ? "navScroll" : ""}>
      <FeatherIcon
        icon="menu"
        id="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ul ref={menuRef} className={isMenuOpen ? "active" : ""}>
        <li>
          <button
            onClick={() => {
              scrollToSection("#home");
              setIsMenuOpen(false);
            }}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("#about");
              setIsMenuOpen(false);
            }}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("#skills");
              setIsMenuOpen(false);
            }}
          >
            SKILLS
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("#projects");
              setIsMenuOpen(false);
            }}
          >
            PROJECTS
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("#contact");
              setIsMenuOpen(false);
            }}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
