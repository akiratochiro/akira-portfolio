import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { content, t } from "../translations/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpgjqag";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ language }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return t(content.contact.validationRequired, language);
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      return t(content.contact.validationEmail, language);
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback(t(content.contact.success, language));
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setFeedback(
          data?.errors?.[0]?.message || t(content.contact.error, language)
        );
      }
    } catch {
      setStatus("error");
      setFeedback(t(content.contact.error, language));
    }
  };

  const isSending = status === "sending";

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

      <form className="contact-form" onSubmit={handleSubmit} noValidate>

        <label className="sr-only" htmlFor="contact-name">
          {t(content.contact.nameLabel, language)}
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t(content.contact.nameLabel, language)}
          required
          disabled={isSending}
        />

        <label className="sr-only" htmlFor="contact-email">
          {t(content.contact.emailLabel, language)}
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t(content.contact.emailLabel, language)}
          required
          disabled={isSending}
        />

        <label className="sr-only" htmlFor="contact-message">
          {t(content.contact.messageLabel, language)}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          placeholder={t(content.contact.messageLabel, language)}
          required
          disabled={isSending}
        />

        {/* honeypot anti-spam (hidden from real users) */}
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
        />

        <button type="submit" disabled={isSending}>
          {isSending
            ? t(content.contact.sending, language)
            : t(content.contact.button, language)}
        </button>

        {feedback && (
          <p
            className={`contact-feedback contact-feedback--${status}`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        )}

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
