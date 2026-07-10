import ProjectCard from "./ProjectCard";
import UnderConstruction from "../images/uc.jpg";
import InMyFridgeShot from "../images/in-my-fridge.png";
import ShortYourLinkShot from "../images/shortyourlink.png";
import { content, t } from "../translations/content";

function Projects({ language }) {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <div className="projects-header">
        <span className="projects-tag">Portfolio</span>

        <h2 className="projects-title">{t(content.projects.title, language)}</h2>

        <p className="projects-subtitle">
          {t(content.projects.subtitle, language)}
        </p>
      </div>

      <div className="projects-grid">
        <div data-aos="zoom-in" data-aos-delay="0">
          {" "}
          <ProjectCard
            image={InMyFridgeShot}
            title={t(content.projects.projectcards.title1, language)}
            description={t(content.projects.projectcards.description1, language)}
            github="https://github.com/akiratochiro/In-My-Fridge/"
            demo="https://in-my-fridge-liard.vercel.app"
            techs={["Javascript", "API", "Vite"]}
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="150">
          <ProjectCard
            image={ShortYourLinkShot}
            title={t(content.projects.projectcards.title2, language)}
            description={t(content.projects.projectcards.description2, language)}
            github="https://github.com/akiratochiro/ShortYourLink"
            demo="https://shortyourlink.onrender.com"
            techs={["Next.js", "Docker", "Jest"]}
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <ProjectCard
            image={UnderConstruction}
            title={t(content.projects.projectcards.title3, language)}
            description={t(content.projects.projectcards.description3, language)}
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