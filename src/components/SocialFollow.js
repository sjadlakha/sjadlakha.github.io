import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faTelegram,
  faWhatsapp,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import SN from "../media/sn.jpg";

function SocialFollow() {
  return (
    <Container fluid="true" className="sf-wrapper">
      <img src={SN} alt="bg" id="sn-bg" />
      <Row className="sf-heading-container">
        <Col className="sf-heading">
          <h1>Connect With Me</h1>
        </Col>
      </Row>
      <Row className="hrule">
        <Col>
          <hr />
        </Col>
      </Row>
      <Row className="sf-container">
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#313335" }}
        >
          <a
            className="nostyle"
            href="https://www.linkedin.com/in/sahaj-adlakha/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} id="ln" className="sf-item" />
          </a>
        </Col>
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <a
            className="nostyle"
            href="https://github.com/sjadlakha"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} id="gh" className="sf-item" />
          </a>
        </Col>
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#000000" }}
        >
          <a
            className="nostyle"
            href="https://www.instagram.com/s.aha_j/?r=nametag"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} id="ig" className="sf-item" />
          </a>
        </Col>

        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "rgb(177, 233, 184)" }}
        >
          <a
            className="nostyle"
            href="mailto:sjadlakha@gmail.com"
            target="blank"
          >
            <FontAwesomeIcon icon={faAt} id="gm" className="sf-item" />
          </a>
        </Col>
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#fffff" }}
        >
          <a
            className="nostyle"
            href="https://www.facebook.com/sj.adlakha23"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} id="fb" className="sf-item" />
          </a>
        </Col>
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "rgb(26,33,45" }}
        >
          <a
            className="nostyle"
            href="https://t.me/SahajAdlakha"
            target="blank"
          >
            <FontAwesomeIcon icon={faTelegram} id="tg" className="sf-item" />
          </a>
        </Col>
        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#dcf8c6" }}
        >
          <a
            className="nostyle"
            href="https://wa.me/qr/UO3CJAI7FJC7C1"
            target="blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} id="ws" className="sf-item" />
          </a>
        </Col>

        <Col
          sm={1}
          md={1}
          lg={1}
          className="sf-item-container"
          style={{ backgroundColor: "#aab8c2" }}
        >
          <a
            className="nostyle"
            href="https://twitter.com/sahaj_adlakha?s=08"
            target="blank"
          >
            <FontAwesomeIcon icon={faTwitter} id="tw" className="sf-item" />
          </a>
        </Col>
      </Row>
      <Row className="hrule">
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default SocialFollow;
