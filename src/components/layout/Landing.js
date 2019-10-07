import React from "react";
import videoWebm from "../../assets/water.webm";
import videoMp4 from "../../assets/water.mp4";

function Landing() {
  return (
    <div className="fullscreen-bg">
      <video loop muted autoPlay className="fullscreen-bg__video">
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
    </div>
  );
}

export default Landing;
