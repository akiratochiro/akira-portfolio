import React from "react";
import Header from "./components/Header";
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import "./styles/App.css"
import { useState } from "react";

function App() {
    const [language, setLanguage] = useState("en");

  return (
     <div className="App">

      <button
        className="language-toggle"
        onClick={() =>
          setLanguage(language === "en" ? "pt" : "en")
        }
      >
        {language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
      </button>

      <Header language={language} />
      <About language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Contact language={language} />

    </div>
  );
}

export default App;
