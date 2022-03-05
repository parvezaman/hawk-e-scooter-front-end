import React from "react";
import Users from "../../Users/Users";
import Navigaton from "../Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";
import Experiance from "./Experiance";

const Home = () => {
  return (
    <div>
      <Navigaton></Navigaton>
      <AboutUs></AboutUs>
      <Experiance />
    </div>
  );
};

export default Home;
