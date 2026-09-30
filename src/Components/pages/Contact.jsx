import "./Contact.css";

import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactItems = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "0306-573 8593",
      link: "tel:03065738593",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "ihsanullah.dev1@gmail.com",
      link: "mailto:ihsanullah.dev1@gmail.com",
    },
  ];

  return (
    <section className="contact_container">
      <div className="contact_header">
        <h1>Contact Me</h1>

        <p>
          Interested in working together or have a question? Feel free to get in
          touch.
        </p>
      </div>

      <div className="contact_card">
        {contactItems.map((item) => (
          <a href={item.link} className="contact_item" key={item.label}>
            <div className="contact_icon">{item.icon}</div>

            <div className="contact_info">
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          </a>
        ))}

        <div className="contact_social">
          <h3>Connect With Me</h3>

          <div className="social_links">
            <a href="    https://github.com/ihsanullahdev" aria-label="GitHub">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ihsan-ullah-afridi/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className="contact_footer">Thanks for visiting my portfolio.</p>
    </section>
  );
}

export default Contact;
