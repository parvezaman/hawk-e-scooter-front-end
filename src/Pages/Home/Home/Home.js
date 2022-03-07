import React from "react";
import Users from "../../Users/Users";
import Navigaton from "../Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";
import AppBanner from "./AppBanner";
import Collections from "./Collections";
import Experiance from "./Experiance";

const Home = () => {
  return (
    <div>
      <Navigaton></Navigaton>
      <AboutUs></AboutUs>
      <Experiance />
      <Collections />
      <AppBanner />
    </div>
  );
};

export default Home;
