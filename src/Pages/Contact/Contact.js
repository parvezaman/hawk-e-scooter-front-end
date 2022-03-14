import React from 'react';
import Navigation from '../Home/Navigation/Navigation';
import './Contact.css';
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="contact-top">
        <h1 className="paddingfornav">Get In Touch</h1>
      </div>
      <div className="contain-box container">
        <div className="row">
          <div className="col-md-6 white p-5">
            <h4>Head Office:</h4>
            <p>SBIT W.L.L. <br /> YELLOW PAINT INTERNATIONAL MEDIA
              SERVICES CO. W.L.L <br /> BCCI Tower 2nd Floor, Flat 21, Bldg.
              519, Road 1010, Block 410 <br /> Sanabis, Manama, Kingdom of
              Bahrain
            </p>

            <hr />
            <h4 className='pt-3'>Phone Number:</h4>
            <p> +973-3888-3904</p>
          </div>
          <div className="col-md-6 green"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
