import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-5" style={{ color: "rgb(4, 4, 54)" }}>
        Hawk
      </h1>
      <div className="row main-footer">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <h5>Compnay</h5>
          <p>How TIER works</p>
          <p>Sustainability</p>
          <p>Where to find us</p>
          <p>Carrer</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <h5>Products</h5>
          <p>Hawk Energy Network</p>
          <p>My hawk</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <h5>Resources</h5>
          <p> Press</p> <p>Blog</p> <p>Engineering</p>
        </div>
      </div>
      <hr />
      <div className="socai-link"></div>
      <p>Socila media</p>
      <p>Privacy Notice</p>
      <div className="socail_icon">
        <FaFacebook />
      </div>
    </div>
  );
};

export default Footer;
