import React from "react";
import {content} from "../translations/content.js"

function Header({language}) {
  return (
    <header className="header">
      <h1>Akira Tochiro</h1>
      <h5>💻 {content[language].header.title}</h5>
      <br></br>
      <p>📍 {content[language].header.location}</p>
      <p>🚀 {content[language].header.status}</p>
    </header>
  );
}

export default Header;
