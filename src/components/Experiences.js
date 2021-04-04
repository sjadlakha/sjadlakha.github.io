import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import LPF from "../media/lpf.jpg";
import MS from "../media/ms.jpeg";
import DL from "../media/dl.png";

function Experiences() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="experiences-container"
    >
      <Carousel.Item className="experience-item-container">
        <img
          className="d-block w-100"
          src={MS}
          alt="First slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption className="experience-text-container">
          <h3>
            Incoming Technology Summer Analyst Intern at Morgan Stanley, India
          </h3>
          <p>May,2021 - July,2021</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="experience-item-container">
        <img
          className="d-block w-100"
          src={LPF}
          alt="Second slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption className="experience-text-container">
          <h3>
            Member, Loria Pragtisheel Foundation, Organisation in Faridabad,
            Haryana
          </h3>
          <p>
            The foundation organises food, potable water, medicines distribution
            drives for the underprivileged. In the recent months, we have
            expanded such drives to include patients in COVID Care Centre and
            Hospitals in Faridabad. I also create visual and written content for
            spreading awareness about social issues and about the foundation to
            solicit contributions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="experience-item-container">
        <img
          className="d-block w-100"
          src={DL}
          alt="Third slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption className="experience-text-container">
          <h3>Deep Learning and Computer Vision Python Intern</h3>
          <p>
            July, 2020 <br></br>
            Attended the internship program conducted by Institution of
            Electronics and Telecommunication Engineers, Mumbai Chapter in
            association with Pantech E-Learning. Worked on several projects
            including face detection and recognition, object detection and
            facial emotion recognition. Had hands-on experience with OpenCV
            library and basics of tKinter in python.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Experiences;
