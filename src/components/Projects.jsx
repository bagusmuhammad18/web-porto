import { useState, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import "../styles/projects.css";
import { Helmet } from "react-helmet-async";

// Lazy load gambar untuk performa
const ProjectImage = lazy(() => import("./ProjectImage"));

// Fungsi untuk kapitalisasi huruf pertama
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatTechName = (key) => {
  const formatted = key.replace(/([A-Z])/g, " $1").trim();
  return formatted
    .replace(/^Ui /i, "UI ")
    .replace(/^Api /i, "API ")
    .replace(/^Id /i, "ID ")
    .replace(/^Io /i, "IO ");
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      imgSrc: "/assets/img/swagger.png",
      alt: "Fish Marketplace Web Backend - Node.js Project",
      title: "Fish Marketplace Web Backend",
      technologies: {
        Backend: "Node.js, Express.js",
        Database: "MongoDB",
        CloudStorage: "Cloudinary",
        Authentication: "JWT, bcrypt",
        FileUpload: "Multer",
        ApiTesting: "Postman",
      },
      features: [
        "Product CRUD (with images and categories)",
        "Shopping cart & total price calculation",
        "Checkout & shipping address management",
        "Order management with status updates",
        "Login, registration, and JWT authentication",
        "Product search, filtering, and pagination",
      ],
      githubLink: "https://github.com/bagusmuhammad18/projek-ikan",
      apiDocLink: "https://iwak.onrender.com/api-docs",
    },
    {
      id: 2,
      imgSrc: "/assets/img/sobatfeses.png",
      alt: "AI Digestive Disease Detection Platform",
      title: "AI Digestive Disease Detection Platform",
      technologies: {
        Frontend: "HTML, CSS, JavaScript",
        MachineLearning: "TensorFlow.js",
        UiLibraries: "Feather Icons, Google Fonts",
        FormHandling: "FormSubmit",
        Design: "Responsive Web Design",
      },
      features: [
        "Early Detection of Digestive Diseases: Use AI to analyze stool images and provide health predictions.",
        "Fast, Serverless Prediction Process: Run models directly in the browser, reducing latency and protecting user privacy.",
        "Intuitive, Mobile-Friendly UI/UX: Easy navigation and seamless experience across devices.",
        "Direct Contact Form: Enable users to easily reach out to the development team for support or inquiries.",
        "Clear Call to Action: A standout 'Try Now' button encourages users to immediately explore the main feature.",
      ],
      githubLink: "https://github.com/bagusmuhammad18/sobatfeses",
    },
    {
      id: 3,
      imgSrc: "/assets/img/yolo.png",
      alt: "YOLO Object Detection - Python Project",
      title: "YOLO Object Detection",
      technologies: {
        language: "Python",
        computerVision: "OpenCV, YOLOv5",
      },
      features: [
        "Developed an object detection program using YOLOv5, utilizing only the CPU of an Intel NUC mini PC on the humanoid soccer field.",
        "Achieved 89% accuracy and a speed of 40fps in detecting objects such as balls, goalposts, and robots.",
      ],
      youtubeLink: "https://youtu.be/Q7cPyaxAaFY",
    },
    {
      id: 4,
      imgSrc: "/assets/img/iconnect.png",
      alt: "iConnect Sign Language Translator - Android App",
      title: "iConnect Sign Language Translator",
      technologies: {
        Mobile: "Android",
        MachineLearning: "TensorFlow",
        Camera: "Android Camera API",
        Testing: "Postman",
      },
      features: [
        "Real-Time Sign Language Translation: Leverages TensorFlow models to interpret sign language through the Android camera instantly.",
        "Extensive Vocabulary Support: Tested with the iConnect Video Dictionary, covering over 200 sign language words.",
        "High Accuracy Performance: Achieved a 95% success rate in translating signs in real-time during rigorous testing.",
      ],
      githubLink: "https://github.com/frdslintang/IConnectAppFinalCapstone",
    },
  ];

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const popupContent = selectedProject && (
    <div className="popup-overlay" onClick={handleClosePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <header className="popup-header">
          <h1>{selectedProject.title}</h1>
          <button className="close-button" onClick={handleClosePopup}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Close Popup"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        <section className="popup-section">
          <h2>Technologies Used</h2>
          <ul className="tech-list">
            {selectedProject.technologies &&
              Object.entries(selectedProject.technologies).map(
                ([key, value]) => (
                  <li key={key}>
                    <strong>
                      {capitalizeFirstLetter(formatTechName(key))}:
                    </strong>{" "}
                    {value}
                  </li>
                )
              )}
          </ul>
        </section>
        <section className="popup-section">
          <h2>Main Features</h2>
          <ul className="feature-list">
            {selectedProject.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="popup-section">
          <h2>Project Links</h2>
          <ul className="link-list">
            {selectedProject.githubLink && (
              <li>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`GitHub Repository for ${selectedProject.title}`}
                >
                  GitHub Repository
                </a>
              </li>
            )}
            {selectedProject.apiDocLink && (
              <li>
                <a
                  href={selectedProject.apiDocLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`API Documentation for ${selectedProject.title}`}
                >
                  API Documentation
                </a>
              </li>
            )}
            {selectedProject.youtubeLink && (
              <li>
                <a
                  href={selectedProject.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Watch ${selectedProject.title} on YouTube`}
                >
                  Watch on YouTube
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>My Projects - Bagus | Full-Stack Developer & AI Solutions</title>
        <meta
          name="description"
          content="Explore my portfolio of full-stack web applications, mobile apps, and AI-powered solutions including marketplaces, machine learning models, and innovative tech projects."
        />
        <meta
          name="keywords"
          content="Bagus, Portfolio Projects, Web Development, Mobile Apps, AI Solutions, Full-Stack, Node.js, React, TensorFlow, YOLO"
        />
        <meta name="author" content="Bagus" />
        <meta property="og:title" content="Projects - Bagus" />
        <meta
          property="og:description"
          content="Discover Bagus' portfolio of web, mobile, and AI projects showcasing innovative solutions and technical skills."
        />
        <meta property="og:image" content="/assets/img/swagger.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-site.com/projects"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h3 id="projects" className="hidden">
        <span className="underline"></span>Projects
      </h3>
      <div className="project">
        {projectsData.map((project) => (
          <div
            className={`project${project.id} hidden`}
            key={project.id}
            onClick={() => handleImageClick(project)}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectImage
                className={`imgProject${project.id}`}
                src={project.imgSrc}
                alt={project.alt}
              />
            </Suspense>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && createPortal(popupContent, document.body)}
    </>
  );
}

export default Projects;
