import React from "react";
import Users from "../../Users/Users";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
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
      <Header></Header>
      <AboutUs></AboutUs>
      <Experiance />
      <Collections />
      <AppBanner />
      <Feedback />
      <LetestBlog />
      <Footer/>
    </div>
  );
};

export default Home;
