// Contoh untuk src/components/About.jsx
import "../styles/about.css";

function About() {
  return (
    <>
      <h3 id="about" className="hidden">
        <span className="underline"></span>About
      </h3>
      <img
        className="profilePhoto hidden"
        src="/assets/img/bagus.png"
        alt="bagus_photo"
      />
      <p className="about hidden">
        I’m Bagus, a final-year Electronics and Instrumentation student at
        Universitas Gadjah Mada with a passion for building full-stack websites,
        mobile apps, and AI-powered solutions. I’ve developed marketplaces,
        integrated machine learning models, and worked on projects ranging from
        backend systems to real-time sign language translation. Whether
        optimizing app performance, enhancing user experiences, or creating
        impactful tech for social good, I’m all about turning ideas into smart,
        effective solutions that make life easier.
      </p>
    </>
  );
}

export default About;
