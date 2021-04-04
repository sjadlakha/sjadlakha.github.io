import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Footer() {
  const [copyable, setCopyable] = React.useState(true);

  function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      function () {
        setCopyable(false);
      },
      function () {
        setCopyable(true);
      }
    );
  }
  return (
    <Container className="footer-wrapper" fluid="true">
      <Row className="footer-container">
        <Col xs={12} sm={6} className="text-container">
          Made by Sahaj Adlakha (sjadlakha@gmail.com)
        </Col>
        <Col
          xs={12}
          sm={6}
          className={copyable ? "copyable" : "copy-clicked"}
          onClick={() => updateClipboard("https://sjadlakha.github.io/")}
          style={{ cursor: "pointer" }}
        >
          {copyable ? "Clck to copy shareable link" : "Link Copied!"}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
