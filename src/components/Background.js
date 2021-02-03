import React from "react";
import "./Background.css";
function Background() {
  return (
    <>
      <div className="background-video-container">
        <video src="/videos/bg.mp4" autoPlay loop muted />
      </div>
    </>
  );
}

export default Background;
