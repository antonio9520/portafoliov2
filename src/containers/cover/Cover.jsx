import React from "react";
import "./Cover.css";
import { Link } from "react-scroll";

const Cover = () => {
  return (
    <div className="cover-container" id="cover">
      <div className="cover-div">
        <h1>Cover Page</h1>

        <button id="btn-cover">ir a la derecha</button>
      </div>
    </div>
  );
};

export default Cover;
