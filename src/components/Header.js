import React from "react";
import { content, t } from "../translations/content.js";
import developerIllustration from "../images/undraw_programming_j1zw.svg";

function Header({ language }) {
  return (
    <header className="hero-section" id="Home">

      {/* Left Side */}
      <div className="hero-content">

        <span className="hero-tag">
          {t(content.header.status, language)}
        </span>

        <h1 className="hero-name">
          Akira Tochiro
        </h1>

        <h2 className="hero-title">
          💻 {t(content.header.title, language)}
        </h2>

        <p className="hero-description">
          {t(content.header.description, language)}
        </p>

        <div className="hero-details">
          <p>📍 {t(content.header.location, language)}</p>
          <p>🚀 {t(content.header.status, language)}</p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary-custom">
            {t(content.header.projectsbuttom, language)}
          </a>

          <a href="#contact" className="btn-secondary-custom">
            {t(content.header.contactbutton, language)}
          </a>
        </div>

      </div>

      {/* Right Side */}
      <div className="hero-illustration">

        {/* Placeholder */}
        <img
    src={developerIllustration}
    alt="Developer Illustration"
    className="hero-svg"
  />

      </div>

    </header>
  );
}

export default Header;