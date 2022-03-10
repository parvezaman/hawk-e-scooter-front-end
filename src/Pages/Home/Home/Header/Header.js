import React, { useEffect } from "react";
import "./Header.css";
import ReactPlayer from "react-player";
import mobileImage from "../../../../Images/mobile-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="row  main-herder">
      <div className="col-lg-12 col-md-12 col-sm-12 main-div">
        <ReactPlayer
          playing
          muted
          loop
          height="80vh"
          width="100vw"
          url="https://youtu.be/3p6gKNJuJP0"
        ></ReactPlayer>
      </div>
      {/* opacity */}
      <div className=" row headerMian">
        <div className="col-lg-6 col-md-6 col-sm-12 main-div2">
          <h3>
            Start Your Ride <br /> With Scootie
          </h3>
          <p className="documents">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
          <button
            className="btn btnVariable1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Getting started
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={mobileImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
