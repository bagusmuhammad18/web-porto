// src/components/Hero.jsx
import { useState, useEffect } from "react";
import "../styles/hero.css";

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const words = [
    "front-end web developer",
    "mobile developer",
    "tech explorer",
  ];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const delayBetween = 1500;

    const type = () => {
      const currentWord = words[index];

      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <div id="home" className="hero">
      <div className="overlay"></div>
      <img
        className="background"
        src="/assets/img/city_compressed.jpg"
        alt="city background"
      />
      <div className="welcome">
        <p className="upper">
          Hello everyone, I am <span className="red-text">Bagus</span>
        </p>
        <p className="lower">
          I'm a&nbsp;
          <span className="dynamic">
            {text}
            <span className="cursor" />
          </span>
        </p>
        <button className="viewMore" onClick={() => scrollToSection("#about")}>
          View More
        </button>
      </div>
    </div>
  );
}

export default Hero;
