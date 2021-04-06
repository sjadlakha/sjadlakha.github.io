import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import d_img from "../media/dance.jpeg";
import fball from "../media/fball.jpeg";
import bball from "../media/bball.jpg";

function Exc() {
  return (
    <Container className="exc-wrapper" fluid="true">
      <Row className="exc-container">
        <Col className="exc-item-container" md={4} id="exc-dance">
          <img src={d_img} alt="dance" />
          <section className="exc-text">
            <h1>Dancer</h1>
            <p>Performed and competed at many events during school</p>
          </section>
        </Col>
        <Col className="exc-item-container" md={4} id="exc-bball">
          <img src={bball} alt="bball" />
          <section className="exc-text">
            <h1>Baskeball Player</h1>
            <p>
              Competed at State Level (Haryana) and University Level (South
              Zone) several times
            </p>
          </section>
        </Col>
        <Col className="exc-item-container" md={4} id="exc-fball">
          <img src={fball} alt="fball" />
          <section className="exc-text">
            <h1>Footbal Player</h1>
            <p>Represented various local clubs and showcased my skills</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Exc;
