import React from 'react';
import { Col, Row } from 'react-bootstrap';
import left from './../../../Images/kickScooter.jpg'
import right from './../../../Images/travelers.jpg'
import './../../Style/style.css'

// const leftbg = {
//     backgroundImage: URL(left),
//     height: "200px"
// }

const Experiance = () => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={5} lg={6} xl={6} className="leftbg p-0 m-0">
                    <div className='ex-center p-0 m-0'>
                        <div className='p-0 m-0'>
                            <h2>20 Years of Experience in Scooter & Bike Rentals</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Col> 
                <Col xs={12} sm={12} md={5} lg={6} xl={6} className="rightbg"></Col> 
            </Row>
        </div>
    );
};

export default Experiance;