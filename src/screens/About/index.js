import React from "react";
import Clink from "../../components/Clink";

const About = props => {
  return (
    <div className="page-about">
      <h1>Selamat Datang di About</h1>
      <Clink link="/" label="Go to home" type="primary" />
    </div>
  );
};

export default About;
