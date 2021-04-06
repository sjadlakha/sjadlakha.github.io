import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import mvn from "../media/mvn.jpg";
import vit from "../media/vit.jpeg";
function Education() {
  return (
    <div className="education-container">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={mvn} alt="M.V.N." />
          <Card.Body>
            <Card.Title>Modern Vidya Niketan (2006-2018)</Card.Title>
            <Card.Text>
              Studied in one of the top schools in Faridabad for 14 years and
              came out as an all rounder performer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            Achievements <br />
            <small className="text-muted">
              10<sup>th</sup> Class(2016): 10 CGPA
            </small>
            <br />
            <small className="text-muted">
              12<sup>th</sup> Class(2018- Science Stream): 91.6%
            </small>
            <br />
            <small className="text-muted">
              Certificate Of Merit for Excellent Performance in Physics CBSE
              Exam (2018)
            </small>
            <br />
            <small className="text-muted">
              Qualified for the State-Level Basketball Championship, Haryana
              four times
            </small>
            <br />
            <small className="text-muted">
              Lead the School's basketball team to several victories
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={vit} alt="VIT Vellore" />
          <Card.Body>
            <Card.Title>
              Vellore Institute Of Technology, Vellore (2018-2022)
            </Card.Title>
            <Card.Text>
              A Computer Science Engineering student at one of the best
              universities in India, with an eagerness to learn and grow
              constantly.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            Achievements <br />
            <small className="text-muted">
              Merit scholarship holder under G V School Development Programme
              awarded for securing 820 rank in VITEEE(2018)
            </small>
            <br />
            <small className="text-muted">CGPA (2018- Present): 9.21</small>
            <br />
            <small className="text-muted">
              Qualified for top 12 in South-Zone Inter-University Basketball
              Championship
            </small>
            <br />
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Education;
