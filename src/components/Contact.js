import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { content, t } from "../translations/content";

export default function Contact({ language }) {
  return (
    <section className="contact-section" id="contact" data-aos="fade-up">

      <span className="contact-tag">
        {t(content.contact.header, language)}
      </span>

      <h2 className="contact-title">
        {t(content.contact.title, language)}
      </h2>

      <p className="contact-text">
        {t(content.contact.text, language)}
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
            t(content.contact.emailLabel, language)
          }
        />

        <textarea
          rows="6"
          placeholder={
            t(content.contact.messageLabel, language)
          }
        />

        <button type="submit">
          {t(content.contact.button, language)}
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