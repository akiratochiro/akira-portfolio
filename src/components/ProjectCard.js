function ProjectCard({ image, title, description, github, demo, techs }) {
  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        <p className="project-description">{description}</p>

        <div className="project-buttons">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-demo-btn"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
          >
            GitHub
          </a>
        </div>
        <footer className="project-footer">
          <ul className="project-tech-list">
            {techs.map((tech, index) => (
              <li key={index} className="project-tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default ProjectCard;
