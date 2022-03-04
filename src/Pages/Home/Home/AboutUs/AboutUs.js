import React, { useEffect } from "react";
import images from "../../../../Images/varla-scooter-5TBmYzZyBJY-unsplash.jpg";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="MainAbout">
      <div className="row">
        <div className="imgAbout col-lg-6 col-md-6 col-sm-12">
          <img
            data-aos="fade-right"
            data-aos-duration="3000"
            className="w-75 "
            src={images}
            alt=""
          />
        </div>

        <div className="descriptionSetion col-lg-6 col-md-6 col-sm-12">
          <h5 data-aos="fade-left" data-aos-duration="3000">
            ABOUT SCOOTER
          </h5>
          <h2>
            Rental Service With A Wide Range Of Vehicles To Accommodate You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            excepturi hic deleniti saepe culpa tempore dicta doloribus quis,
            labore nostrum! Reprehenderit ducimus quas quo rem dignissimos ab
            amet dolores mollitia, necessitatibus quae eius sed adipisci,
            maiores odit at delectus dolorum assumenda harum earum? Eum laborum
            porro repellat labore culpa quis.
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            className="btn btnVariable "
          >
            More About Us{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
