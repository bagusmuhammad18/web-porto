// src/scripts.js
import { useEffect } from "react";

function useScrollEffects() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    if (!wrapper) {
      return;
    }

    const goTop = document.getElementById("goTop");
    if (!goTop) {
      return;
    }

    const handleScroll = () => {
      if (wrapper.scrollTop > 50) {
        goTop.classList.add("scroll");
      } else {
        goTop.classList.remove("scroll");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
          }
        });
      },
      { root: wrapper, threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    wrapper.addEventListener("scroll", handleScroll);
    handleScroll(); // Panggil sekali saat mount

    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
}

export default useScrollEffects;
