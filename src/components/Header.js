import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
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
              I am Sahaj Adlakha <br />
              <p className="stylish-text">Developer</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
