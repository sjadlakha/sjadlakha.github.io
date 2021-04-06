import React from "react";
import Typed from "react-typed";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../media/me.jpg";

export default function First() {
  return (
    <div className="first-container">
      <Container className="my-image-container">
        <Row>
          <Col xs={6} md={4} className="my-image-col">
            <Image src={MyImage} roundedCircle className="my-img" />
          </Col>
        </Row>
      </Container>
      <div className="second-container">
        <span className="name-is">I am &nbsp;</span>
        <span className="name">Sahaj Adlakha,</span>
        <div className="a">
          <span>a &nbsp;</span>
          <Typed
            className="typed-text"
            strings={[
              "Python developer",
              "Web developer",
              "Machine learning enthusiast",
              "Deep learning enthusiast",
              "Great team player",
              "Termendous team leader",
            ]}
            typeSpeed={80}
            backSpeed={99}
            // fadeOut={true}
            loop
          />
        </div>
      </div>
      <br />
      <div className="third-container">
        <FontAwesomeIcon icon={faCaretDown} className="down-icon" />
      </div>
    </div>
  );
}
