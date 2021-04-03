import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

// media
import project_img_1 from "../media/project-img-1.png";
import project_img_2 from "../media/project-img-2.png";
import project_img_3 from "../media/project-img-3.jpg";
import project_img_4 from "../media/project-img-4.png";
import project_img_5 from "../media/project-img-5.png";
import project_img_6 from "../media/project-img-6.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">Projects</div>
      <hr id="rule" />

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3} style={{ marginBottom: "2rem" }}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Social Distancing Monitoring System
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Health-E-Locker
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Alexa Quiz Game
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Phishy URL Detection
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Cycle Renting System
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Secure Web App Login
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_1}
                        alt="project"
                      />

                      <div className="project-tech-stack">
                        <Badge variant="info">#python3</Badge>
                        <Badge variant="primary">#tKinter</Badge>
                        <Badge variant="success">#OpenCV2</Badge>
                        <Badge variant="warning">#NeuralNetwork</Badge>
                        <Badge variant="danger">#COVID19</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          Social Distancing Monitoring System
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            A social distancing monitoring and alarming system.
                            The management and safety issues faced by various
                            store managers during the lockdown period could be
                            solved to some extent with this application. A
                            Neural Networks based object detection algorithm put
                            together with euclidean distance calculation between
                            identified objects. Generates an alarm as soon as
                            the distance between identified humans go below the
                            specified limit.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://github.com/sjadlakha/SocialDistancingDetectionSystem"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_2}
                        alt="project"
                      />

                      <div className="project-tech-stack">
                        <Badge variant="success">#JavaScript</Badge>
                        <Badge variant="primary">#CSS</Badge>
                        <Badge variant="danger">#Bootstrap</Badge>
                        <Badge variant="warning">#NodeJS</Badge>
                        <Badge variant="info">#HTML</Badge>
                        <Badge variant="secondary">#MongoDB</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          health-e-locker
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            A website that is a one stop destination for all
                            user medical health details. It provides options
                            like tracking user’s health, uploading reports and
                            prescriptions for easy reference whenever user
                            visits a doctor, also includes helpful articles on
                            living a healthy life.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://github.com/sjadlakha/Health-E-Locker"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_3}
                        alt="project"
                      />

                      <div className="project-tech-stack">
                        <Badge variant="info">#python3</Badge>
                        <Badge variant="primary">#AlexaSkillsKit</Badge>
                        <Badge variant="success">#AmazonAlexa</Badge>
                        <Badge variant="warning">#Flask</Badge>
                        <Badge variant="danger">#OpenTDB</Badge>
                        <Badge variant="dark">#JSON</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          Alexa Quiz Game
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            Quiz game that works on Amazon Alexa. Backend
                            created with Flask and Alexa Skills Kit in python.
                            Open database API used for fetching questions for
                            the quiz based on many filters like categories
                            including General Knowledge, Science, Mythology,
                            etc. and difficulty levels selected by the
                            user.Explored Voice User Interface(VUI) powered by
                            Amazon Alexa.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://github.com/sjadlakha/AlexaQuizGame"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_4}
                        alt="project"
                        style={{ border: "2px solid white" }}
                      />

                      <div className="project-tech-stack">
                        <Badge variant="info">#python3</Badge>
                        <Badge variant="danger">#Pickle</Badge>
                        <Badge variant="success">#HTML</Badge>
                        <Badge variant="primary">#NodeJS</Badge>
                        <Badge variant="warning">#Sklearn</Badge>
                        <Badge variant="dark">#BeautifulSoup</Badge>
                        <Badge variant="light">#Pandas</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          Phishy URL Detection
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            A Machine Learning based web application that takes
                            as input a URL from the user and predicts if it is
                            Phishy or not. Backend runs on NodeJs for web
                            application interface and functionality and Python
                            for Machine Learning Algorithm. The URL is taken as
                            the raw input and information like url-length,
                            redirection links, sub domains, usage of shortening
                            surface and much more is extracted using various
                            python libraries like urllib, socket and beautiful
                            soup. This carefully extracted data is converted
                            into a processed data to be given as the input for
                            predicting the outcome based on learning of Random
                            Forest and Decision Tree model. The web app helps
                            users to check URL's authenticity to avoid getting
                            scammed.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://github.com/sjadlakha/Phishy-URL-Detection"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_5}
                        alt="project"
                      />

                      <div className="project-tech-stack">
                        <Badge variant="info">#ArduinoUNO</Badge>
                        <Badge variant="primary">#IoT</Badge>
                        <Badge variant="success">#RFID</Badge>
                        <Badge variant="warning">#C</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          Cycle Renting System
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            Cycle Renting System with 2-Step Authentication
                            System and Integrated Mobile Application Built as a
                            solution to the everyday issue of commuting in our
                            campus, this program is designed to provide a
                            platform for renting bicycles by people on campus
                            from their owners when such bicycles are not
                            otherwise in use. It comprises of a hardware lock
                            based on Arduino, RFID detection and a one-time
                            passcode (generated on the app). I have worked on
                            programming Arduino and wiring together all the
                            components including RFID detector, servo motor, LED
                            display, keypad and the buzzer.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://drive.google.com/file/d/1E4R0c2RW2moYfDq_d34aLcBJ2UCeP0SJ/view?usp=sharing"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <Container>
                  <Row>
                    <Col md="3">
                      <img
                        className="project-image"
                        src={project_img_6}
                        alt="project"
                      />

                      <div className="project-tech-stack">
                        <Badge variant="info">#PHP</Badge>
                        <Badge variant="primary">#SQLInjection</Badge>
                        <Badge variant="success">#PDO</Badge>
                        <Badge variant="light">#SQLMap</Badge>
                        <Badge variant="danger">#COVID19</Badge>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{ height: "10%" }}
                          className="project-title"
                        >
                          Secure Web App Login
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="project-desc">
                            Created a login portal for a website vulnerable to
                            SQL injection attacks and improvised it with respect
                            to information security. The secure version makes
                            use of PDO and input verification techniques. This
                            project helped in exploring the vulnerabilities in a
                            login portal using manual SQL injection and
                            automated SQL injection using SQLMap and overcoming
                            them. The future improvement includes use of Machine
                            Learning models to classify an input string as
                            maliciuous or safe.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ height: "10%" }} className="project-link">
                          <a
                            href="https://github.com/sjadlakha/VulnerableWebApp"
                            target="blank"
                          >
                            Check it out here &gt;&gt;
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Projects;
