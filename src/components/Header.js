import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="my-name-container">
          <h1 id="my-name">Sahaj Adlakha</h1>
        </div>
        <div className="image-desc-container">
          <div className="profile-image">
            <img
              src="/images/p_pic.jpg"
              alt="sahaj-adlakha"
              className="profile"
            />
          </div>
          <div className="desc-container">
            <p className="desc">
              Hi there, I am a junior year Computer Science student, python
              developer and web developer.
              <br /> Know more about me down below
              <i className="fas fa-smile-wink"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
