import React from "react";
import "./Navbar.css";

function Navbar() {
  // const [active, setActive] = useState(false);
  // const addActiveClass = (active) => {
  //   setActive(true);
  // };

  return (
    <>
      <div className="container stick nav-container">
        <div className="row">
          <div className="col active">
            <a href="#gen" className="nav-links ">
              General
            </a>
          </div>
          <div className="col">
            <a href="#education" className="nav-links">
              Education
            </a>
          </div>
          <div className="col">
            <a href="#projects" className="nav-links">
              Projects
            </a>
          </div>
          <div className="col">
            <a href="#achandcourses" className="nav-links">
              Achievements &amp; Courses
            </a>
          </div>
          <div className="col">
            <a href="#exc" className="nav-links">
              Extra Curricular
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
