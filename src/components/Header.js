import React from "react";
import { content } from "../translations/content.js";
import developerIllustration from "../images/undraw_programming_j1zw.svg";

function Header({ language }) {
  return (
    <header className="hero-section" id="Home">

      {/* Left Side */}
      <div className="hero-content">

        <span className="hero-tag">
          {content[language].header.status}
        </span>

        <h1 className="hero-name">
          Akira Tochiro
        </h1>

        <h2 className="hero-title">
          💻 {content[language].header.title}
        </h2>

        <p className="hero-description">
          {content[language].header.description}
        </p>

        <div className="hero-details">
          <p>📍 {content[language].header.location}</p>
          <p>🚀 {content[language].header.status}</p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary-custom">
            {content[language].header.projectsbuttom}
          </a>

          <a href="#contact" className="btn-secondary-custom">
            {content[language].header.contactbutton}
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