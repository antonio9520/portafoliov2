import React, { Fragment } from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-right">
        <button id="btn-nav-right">btn</button>
      </div>
      <div className="nav-left">
        <button id="btn-nav-left">btn</button>
      </div>
    </Fragment>
  );
};

export default Nav;
