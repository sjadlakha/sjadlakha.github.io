import React from "react";
import Typed from "react-typed";
export default function First() {
  return (
    <div className="first-container">
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
    </div>
  );
}
