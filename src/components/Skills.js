import React from "react";
import Card from "react-bootstrap/Card";
import { content } from "../translations/content";

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

import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";

export default function Skills({ language }) {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
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
  ];
  return (
    <Card>
      <Card.Header className="CardHeader">
        {content[language].skills.title}
      </Card.Header>
      <Card.Body>
        <Card.Title className="CardTittle">
          {content[language].skills.text}{" "}
        </Card.Title>

        <br></br>
        <Card.Text>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
