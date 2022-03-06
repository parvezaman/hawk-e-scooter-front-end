import React from "react";
import Users from "../../Users/Users";
import Navigaton from "../Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";
import Collections from "./Collections";
import Experiance from "./Experiance";

const Home = () => {
  return (
    <div>
      <Navigaton></Navigaton>
      <AboutUs></AboutUs>
      <Experiance />
      <Collections />
    </div>
  );
};

export default Home;
