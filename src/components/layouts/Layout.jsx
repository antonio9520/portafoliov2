import React from "react";
import "./Layout.css";
import Menu from "./menu/Menu";
import Nav from "./nav/Nav";

const Layout = () => {
  return (
    <div className="layout-cont">
      <Menu />
      <Nav />
    </div>
  );
};

export default Layout;
