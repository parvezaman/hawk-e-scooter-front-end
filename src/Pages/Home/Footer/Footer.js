import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container mb-5">
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
      {/* socail media section */}
      <div className="socai-link row mt-3 mb-3">
        <p className="col-lg-4 col-md-4 col-sm-6">Socila media</p>
        <p className="col-lg-4 col-md-4 col-sm-6">Privacy Notice</p>
        <div className="socail-icon col-lg-4 col-md-4 col-sm-6 ">
          <span>
            <FaFacebook style={{ fontSize: "30px", marginRight: "15px" }} />
          </span>
          <span>
            {" "}
            <FaWhatsapp style={{ fontSize: "30px", marginRight: "15px" }} />
          </span>
          <span>
            {" "}
            <FaTwitter style={{ fontSize: "30px", marginRight: "15px" }} />
          </span>
          <span>
            {" "}
            <IoLogoInstagram
              style={{ fontSize: "30px", marginRight: "15px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
