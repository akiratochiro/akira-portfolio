import ProjectCard from "./ProjectCard";
import UnderConstruction from "../images/uc.jpg";
import InMyFridgeShot from "../images/in-my-fridge.png";
import { content } from "../translations/content";

function Projects({ language }) {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <div className="projects-header">
        <span className="projects-tag">
          Portfolio
        </span>

        <h2 className="projects-title">{content[language].projects.title}</h2>

        <p className="projects-subtitle">
          {content[language].projects.subtitle}
        </p>
      </div>

      <div className="projects-grid">
        <div data-aos="zoom-in" data-aos-delay="0">
          {" "}
          <ProjectCard
            image={InMyFridgeShot}
            title={content[language].projects.projectcards.title1}
            description={content[language].projects.projectcards.description1}
            github="https://github.com/akiratochiro/In-My-Fridge/"
            demo="https://in-my-fridge-liard.vercel.app"
            techs={["Javascript", "API", "Vite"]}
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="150">
          <ProjectCard
            image={UnderConstruction}
            title={content[language].projects.projectcards.title2}
            description={content[language].projects.projectcards.description2}
            github="https://github.com/your-user/project1"
            demo="https://project1.com"
            techs={["React", "Node.js", "MongoDB"]}
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <ProjectCard
            image={UnderConstruction}
            title={content[language].projects.projectcards.title3}
            description={content[language].projects.projectcards.description3}
            github="https://github.com/your-user/project2"
            demo="https://project2.com"
            techs={["Vue.js", "Express", "PostgreSQL"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
