import "../styles/contact.css";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Bagus | Full-Stack Developer & AI Solutions</title>
        <meta
          name="description"
          content="Get in touch with Bagus for collaboration or inquiries about web development, mobile apps, and AI solutions. Leave your details and message here."
        />
        <meta
          name="keywords"
          content="Bagus, Contact, Collaboration, Web Development, Mobile Apps, AI Solutions"
        />
        <meta name="author" content="Bagus" />
        <meta property="og:title" content="Contact - Bagus" />
        <meta
          property="og:description"
          content="Contact Bagus for collaboration or inquiries. Leave your details and message here."
        />
        <meta property="og:image" content="/assets/img/contact.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-site.com/contact"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h3 id="contact" className="hidden">
        <span className="underline"></span>Contact
      </h3>
      <p className="contactDesc hidden">
        If you have a question or are interested in collaborating, kindly leave
        your details.
      </p>
      <form
        action="https://formsubmit.co/bagus.muh2001@mail.ugm.ac.id"
        method="POST"
        className="hidden"
      >
        <input
          className="hidden"
          type="text"
          name="Name"
          placeholder="Full Name"
          required
        />
        <input
          className="hidden"
          type="email"
          name="Email"
          placeholder="Email"
          required
        />
        <textarea
          className="hidden"
          name="Message"
          placeholder="Message"
          required
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <button className="hidden" type="submit">
          SEND
        </button>
      </form>
    </>
  );
}

export default Contact;
