import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { content, t } from "../translations/content";

export default function NavBar({ language, setLanguage }) {
    return(
<Navbar expand="lg"   fixed="top" className="custom-navbar">
  <Navbar.Brand href="#Home" className="navbar-brand-custom">
    akira
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto align-items-center">

    <Nav.Link href="#Home">
        Home
      </Nav.Link>

      <Nav.Link href="#about">
        {t(content.header.title, language)}
      </Nav.Link>

      <Nav.Link href="#projects">
        {t(content.projects.title, language)}
      </Nav.Link>

      <Nav.Link href="#contact">
        {t(content.contact.header, language)}
      </Nav.Link>

      <button
        className="language-toggle-navbar"
        onClick={() =>
          setLanguage(language === "en" ? "pt" : "en")
        }
      >
        {language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
      </button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}