import "../styles/contact.css";

function Contact() {
  return (
    <>
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
