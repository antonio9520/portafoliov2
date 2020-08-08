import React, { Fragment, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [open, setOpen] = useState("active");
  const handleBtn = () => {
    if (open === "") {
      setOpen("active");
    } else {
      setOpen("");
    }
  };
  return (
    <Fragment>
      <div className="menu-cont">
        <div className={`menu-page ${open}`}>
          <button onClick={handleBtn}>Menu</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
