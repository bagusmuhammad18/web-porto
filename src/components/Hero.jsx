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
    "UI/UX enthusiast",
    "tech explorer",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const delayBetween = 1500;

    const type = () => {
      const currentWord = words[index];
      const shouldDelete = isDeleting ? 1 : 0;

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
        src="/assets/img/city.jpg"
        alt="city background"
      />
      <div className="welcome">
        <p className="upper">
          Hello everyone, I am <span>Bagus</span>
        </p>
        <p className="lower">
          I'm a 
          <span className="dynamic">
            {text}
            <span className="cursor" />
          </span>
        </p>
        <a className="viewMore" href="#about">
          View More
        </a>
      </div>
    </div>
  );
}

export default Hero;
