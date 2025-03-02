import "../styles/about.css";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Me - Bagus | Full-Stack Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="I'm Bagus, a final-year Electronics and Instrumentation student at UGM, passionate about building full-stack websites, mobile apps, and AI-powered solutions. Explore my journey in tech!"
        />
        <meta
          name="keywords"
          content="Bagus, Full-Stack Developer, Mobile Developer, AI Engineer, Electronics, Universitas Gadjah Mada, Web Development, Machine Learning"
        />
        <meta name="author" content="Bagus" />
        <meta property="og:title" content="About Me - Bagus" />
        <meta
          property="og:description"
          content="Discover Bagus' journey as a tech enthusiast, building websites, mobile apps, and AI solutions at Universitas Gadjah Mada."
        />
        <meta property="og:image" content="/assets/img/bagus.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-site.com/about"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h3 id="about" className="hidden">
        <span className="underline"></span>About
      </h3>
      <img
        className="profilePhoto hidden"
        src="/assets/img/bagus.png"
        alt="Bagus - Full-Stack Developer"
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
