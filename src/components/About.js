import React from "react";
import Card from "react-bootstrap/Card";
import { content } from "../translations/content";

export default function About({ language }) {
  return (
    <Card>
      <Card.Header className="CardHeader">
        {content[language].about.header}
      </Card.Header>

      <Card.Body>
        <Card.Title className="CardTittle">
          {content[language].about.title}
        </Card.Title>

        <Card.Text className="CardText">
          <p>{content[language].about.text}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}