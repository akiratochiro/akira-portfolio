import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import UnderConstruction from "../images/uc.jpg"
import { content } from "../translations/content";


function Projects({language}) {
  return (
    <Card>
      <Card.Header className="CardHeader">{content[language].projects.title}</Card.Header>
      <Card.Body>
        <Card.Title className="CardTittle"></Card.Title>
<Row className="g-4">

            <Col md={4}>
            <ProjectCard
              image={UnderConstruction}
              title={content[language].projects.projectcards.title1}
              description={content[language].projects.projectcards.description1}
              github="https://github.com/your-user/project3"
              demo="https://project3.com"
            />
          </Col>

          <Col md={4}>
            <ProjectCard
              image={UnderConstruction}
              title={content[language].projects.projectcards.title2}
              description={content[language].projects.projectcards.description2}
              github="https://github.com/your-user/project1"
              demo="https://project1.com"
            />
          </Col>

          <Col md={4}>
            <ProjectCard
              image={UnderConstruction}
              title={content[language].projects.projectcards.title3}
              description={content[language].projects.projectcards.description3}
              github="https://github.com/your-user/project2"
              demo="https://project2.com"
            />
          </Col>



        </Row>
      </Card.Body>
    </Card>
  );
}

export default Projects;
