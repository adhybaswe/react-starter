import React from "react";
import Clink from "../../components/Clink";

const Home = props => {
  return (
    <div className="page-home">
      <h1>Selamat Datang di Home</h1>
      <Clink link="about" label="Go to about" type="primary" />
    </div>
  );
};

export default Home;
