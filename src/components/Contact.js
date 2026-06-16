import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {content} from "../translations/content"

export default function Contact({language}) {
  return (
    <Card>
      <Card.Header className="CardHeader">{content[language].contact.header}</Card.Header>
      <Card.Body>
        <Card.Title className="CardTittle">{content[language].contact.title}</Card.Title>

        <Card.Text>
          {content[language].contact.text}
        </Card.Text>

        <div className="contact-buttons">
          <a href="mailto:akira.tochiro23@gmail.com">
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/leandro-akira-tochiro-661a52164/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="https://github.com/akiratochiro" target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
