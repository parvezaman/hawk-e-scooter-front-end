import React from "react";
import Users from "../../Users/Users";
import Header from "../Header/Header";
import Navigaton from "../Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Navigaton></Navigaton>
      <Header></Header>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
