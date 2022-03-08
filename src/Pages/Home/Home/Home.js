import React from "react";
import Users from "../../Users/Users";
import Navigaton from "../Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";
import AppBanner from "./AppBanner";
import Collections from "./Collections";
import Experiance from "./Experiance";
import Feedback from "./Feedback";
import LetestBlog from "./LetestBlog";

const Home = () => {
  return (
    <div>
      <Navigaton></Navigaton>
      <AboutUs></AboutUs>
      <Experiance />
      <Collections />
      <AppBanner />
      <Feedback />
      <LetestBlog />
    </div>
  );
};

export default Home;
