// src/components/Projects.jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      imgSrc: "/assets/img/swagger.png",
      title: "Backend Web Marketplace Ikan",
      technologies: {
        backend: "Node.js, Express.js",
        database: "MongoDB",
        cloudStorage: "Cloudinary",
        authentication: "JWT, bcrypt",
        fileUpload: "Multer",
        apiTesting: "Postman",
      },
      features: [
        "CRUD Produk (dengan gambar dan kategori)",
        "Keranjang belanja & kalkulasi total",
        "Checkout & penyimpanan alamat pengiriman",
        "Manajemen pesanan dengan update status",
        "Login, registrasi, dan autentikasi JWT",
        "Pencarian, filter, dan pagination produk",
      ],
      githubLink: "https://github.com/bagusmuhammad18/projek-ikan",
      apiDocLink: "https://iwak.onrender.com/api-docs",
    },
    {
      id: 2,
      imgSrc: "/assets/img/sobatfeses.png",
      alt: "sobatfeses",
      title: "Sobat Feses Platform",
      technologies: "Node.js, Express, MongoDB",
      features: "User authentication, Data visualization, Real-time updates",
      githubLink: "https://github.com/bagusmuhammad18/sobatfeses",
    },
    {
      id: 3,
      imgSrc: "/assets/img/yolo.png",
      alt: "yolo",
      title: "YOLO Object Detection",
      technologies: "Python, OpenCV, YOLOv5",
      features: "Real-time object detection, Custom model training",
      githubLink: "https://github.com/bagusmuhammad18/yolo-detection",
    },
  ];

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (project) => {
    console.log("Clicked project:", project.title);
    setSelectedProject(project);
  };

  const popupContent = selectedProject && (
    <div className="popup-overlay" onClick={handleClosePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <header className="popup-header">
          <h2>{selectedProject.title}</h2>
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
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        <section className="popup-section">
          <h3>Teknologi yang Digunakan</h3>
          <ul className="tech-list">
            <li>
              <strong>Backend:</strong>{" "}
              {selectedProject.technologies?.backend ||
                selectedProject.technologies}
            </li>
            <li>
              <strong>Database:</strong>{" "}
              {selectedProject.technologies?.database}
            </li>
            <li>
              <strong>Cloud Storage:</strong>{" "}
              {selectedProject.technologies?.cloudStorage}
            </li>
            <li>
              <strong>Autentikasi:</strong>{" "}
              {selectedProject.technologies?.authentication}
            </li>
            <li>
              <strong>File Upload:</strong>{" "}
              {selectedProject.technologies?.fileUpload}
            </li>
            <li>
              <strong>API Testing:</strong>{" "}
              {selectedProject.technologies?.apiTesting}
            </li>
          </ul>
        </section>
        <section className="popup-section">
          <h3>Fitur Utama</h3>
          <ul className="feature-list">
            {selectedProject.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="popup-section">
          <h3>Links</h3>
          <ul className="link-list">
            <li>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
            {selectedProject.apiDocLink && (
              <li>
                <a
                  href={selectedProject.apiDocLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Documentation
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
      <h3 id="projects">Projects</h3>
      <div className="project">
        {projectsData.map((project) => (
          <div
            className={`project${project.id}`}
            key={project.id}
            onClick={() => handleImageClick(project)}
          >
            <img
              className={`imgProject${project.id}`}
              src={project.imgSrc}
              alt={project.alt}
            />
          </div>
        ))}
      </div>
      {selectedProject && createPortal(popupContent, document.body)}
    </>
  );
}

export default Projects;
