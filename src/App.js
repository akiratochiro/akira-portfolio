import React from "react";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [language, setLanguage] = useState("en");

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 400,
    });
  }, []);

  return (
    <div className="App">
      <NavBar
        language={language}
        setLanguage={setLanguage}
      />
      <Header language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
}
export default App;
