import React from "react";
import { content } from "../translations/content";
import portrait from "../images/portrait.png"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
  FaPython,
  FaNpm,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiVite,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function About({ language }) {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNpm />, name: "npm" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiRender />, name: "Render" },
  ];

  return (
    <section className="about-section" id="about" data-aos="fade-right">
      {/* Left Side */}
      <div className="about-image-container" data-aos="fade-right">
        {/* Placeholder */}
        <img src={portrait} alt="Profile" className="about-image" />
      </div>

      {/* Right Side */}
      <div className="about-content">
        <span className="about-tag">{content[language].about.header}</span>

        <h2 className="about-title" data-aos="fade-up">{content[language].about.title}</h2>

        <p className="about-text" data-aos="fade-up">{content[language].about.text1}</p>

        <p className="about-text" data-aos="fade-up">
          {content[language].about.text2}
        </p>

        <div className="about-stack">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            {skills.map((skill) => (
              <div className="tech-icon" key={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
