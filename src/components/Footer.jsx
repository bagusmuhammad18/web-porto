// src/components/Footer.jsx
import FeatherIcon from "feather-icons-react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-icons">
          <a href="https://github.com/bagusmuhammad18" target="_blank">
            <img
              className="github_logo"
              src="/assets/img/github_logo_red.png"
              alt="github_logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bagus-muhammad-fajar-ramadhan-650812173/"
            target="_blank"
          >
            <img
              className="linkedin_logo"
              src="/assets/img/linkedin_logo_red.png"
              alt="linkedin_logo"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
