import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-div">
        <h1>About Me</h1>
        <button className="to-left" id="btn-about">
          Ir a la izquierda
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
