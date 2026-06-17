import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { content } from "../translations/content";

export default function Contact({ language }) {
  return (
    <section className="contact-section" id="contact" data-aos="fade-up">

      <span className="contact-tag">
        {content[language].contact.header}
      </span>

      <h2 className="contact-title">
        {content[language].contact.title}
      </h2>

      <p className="contact-text">
        {content[language].contact.text}
      </p>

      <a
        href="mailto:akira.tochiro23@gmail.com"
        className="contact-email"
      >
        <FaEnvelope />
        akira.tochiro23@gmail.com
      </a>

      <form className="contact-form">

        <input
          type="email"
          placeholder={
            content[language].contact.emailLabel
          }
        />

        <textarea
          rows="6"
          placeholder={
            content[language].contact.messageLabel
          }
        />

        <button type="submit">
          {content[language].contact.button}
        </button>

      </form>

      <div className="contact-links">

        <a
          href="https://www.linkedin.com/in/leandro-akira-tochiro-661a52164/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/akiratochiro"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

      </div>

    </section>
  );
}