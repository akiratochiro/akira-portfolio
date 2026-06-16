import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard({ image, title, description, github, demo }) {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img className="ProjectCardImage" variant="top" src={image} />

      <Card.Body>
        <Card.Title className="CardTittle">{title}</Card.Title>

        <Card.Text className="CardText">{description}</Card.Text>

        <div className="d-flex gap-2">
          <Button className="OpenProjectButton"
            href={demo}
            target="_blank"
          >
            Open
          </Button>
          <Button className="OpenGitButton"
            href={github}
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
