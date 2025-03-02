import "../styles/skills.css";
import { Helmet } from "react-helmet-async";

function Skills() {
  const skills = [
    { name: "React.js", img: "/assets/img/react_logo.png", start: "2023" },
    { name: "Node.js", img: "/assets/img/node_js.png", start: "2023" },
    { name: "Express", img: "/assets/img/express.png", start: "2024" },
    { name: "MongoDB", img: "/assets/img/mongodb.webp", start: "2024" },
    { name: "Vercel", img: "/assets/img/vercel.svg", start: "2024" },
    { name: "Kotlin", img: "/assets/img/kotlin.png", start: "2023" },
    { name: "C++", img: "/assets/img/cpp_logo.png", start: "2021" },
    { name: "Python", img: "/assets/img/python_logo.png", start: "2020" },
    { name: "Git", img: "/assets/img/git.png", start: "2021" },
    { name: "OpenCV", img: "/assets/img/opencv_logo.png", start: "2021" },
    { name: "ROS", img: "/assets/img/ros.png", start: "2021" },
    { name: "Linux", img: "/assets/img/linux.png", start: "2021" },
    { name: "Figma", img: "/assets/img/figma.png", start: "2022" },
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Bagus | Full-Stack Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="Explore Bagus' skills in web development, mobile apps, and AI. Proficient in React.js, Node.js, Python, MongoDB, and more. Always learning and building innovative solutions."
        />
        <meta
          name="keywords"
          content="Web Developer, Full-Stack Developer, React.js, Node.js, Express.js, MongoDB, Python, AI, Kotlin, Git, OpenCV, ROS, Linux, Figma"
        />
        <meta name="author" content="Bagus" />
        <meta property="og:title" content="Skills - Bagus" />
        <meta
          property="og:description"
          content="Discover the tech stack and tools Bagus uses — from front-end frameworks like React.js to backend technologies like Node.js, plus AI and robotics libraries like OpenCV and ROS."
        />
        <meta property="og:image" content="/assets/img/react_logo.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-site.com/skills"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h3 id="skills" className="hidden">
        <span className="underline"></span>Skills
      </h3>
      <div className="containerSkill hidden">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={skill.name.toLowerCase().replace(/\./g, "")}
          >
            <div className="completion">Started learning in {skill.start}</div>
            <div className="skill-content">
              {skill.img ? (
                <img
                  className="child"
                  src={skill.img}
                  alt={`${skill.name} logo`}
                />
              ) : (
                <p className="child no-image">{skill.name}</p>
              )}
              <p className="child skill-name">{skill.name}</p>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default Skills;
