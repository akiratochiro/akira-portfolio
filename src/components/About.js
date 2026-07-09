import React from "react";
import { content } from "../translations/content";
import portrait from "../images/portrait.png";

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
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiVite,
  SiVercel,
  SiRender,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiJest,
  SiEslint,
} from "react-icons/si";

export default function About({ language }) {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiRender />, name: "Render" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiEslint />, name: "ESLint" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNpm />, name: "npm" },
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

        <h2 className="about-title" data-aos="fade-up">
          {content[language].about.title}
        </h2>

        <p className="about-text" data-aos="fade-up">
          {content[language].about.text1}
        </p>

        <p className="about-text" data-aos="fade-up">
          {content[language].about.text2}
        </p>

        <div className="about-stack">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            {skills.map((skill) => (
              <div className="tech-icon" key={skill.name}>
                {skill.icon}
                <span className="tech-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
