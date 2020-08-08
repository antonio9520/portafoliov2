import React, { Fragment } from "react";
import "./App.css";
import { Cover, AboutMe, Experience } from "../../containers";
import { Layout } from "../../components";

function App() {
  return (
    <Fragment>
      <Layout />
   
      <Cover />
      <AboutMe />
      <Experience />
   
    </Fragment>
  );
}

export default App;
