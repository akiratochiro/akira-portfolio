import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../styles/Palete.css"

export default function Palete(){
    return(
        <Container>
            <Row>
                <Col className="color-block p1"></Col>
                <Col className="color-block p2"></Col>
                <Col className="color-block p3"></Col>
                <Col className="color-block p4"></Col>
                <Col className="color-block p5"></Col>
                <Col className="color-block p6"></Col>
            </Row>
        </Container>
    )
}