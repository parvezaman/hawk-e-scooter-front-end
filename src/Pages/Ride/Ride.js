import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import instractorLogo from './../../Images/renroll.svg';
import instractor1 from './../../Images/download.svg';
import step2 from './../../Images/step2.svg'
import step3 from './../../Images/step3.svg'
import step4 from './../../Images/step4.svg'
import step5 from './../../Images/step5.svg'
import step6 from './../../Images/step6.svg'
import step7 from './../../Images/step7.svg'
import step8 from './../../Images/step8.svg'
import Navigaton from '../Home/Navigation/Navigation';
import './Ride.css';
import Footer from '../Footer/Footer'

const Ride = () => {
    return (
        <Container className='p-5 mt-5'>
            <Navigaton></Navigaton>
           <div className='text-center'>
               <h1 className='pt-5 rideHeader1'>How to Ride HAWK</h1>
            <h5 className='p-4'>Starting a ride with HAWK is as easy as it is fun. Download the <br /> HAWK app, sign up and follow the steps below to start moving.</h5>
           <video autoPlay muted loop width="890" src="https://i.imgur.com/7jw9ir8.mp4"></video>
           <br />
                <h4 className='mt-5'>It’s Really Easier To Rent</h4>
                <p className='pt-3 ridePara'>We offer electric scooters for renting at low prices.</p>
            </div>
            <div className='p-5 mt-5 stepContainer'>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
                    <Col xl={8} lg={8} md={8} sm={12} xs={12} className="centerITemBg">
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={instractor1} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 1</h2>
                                        <p className='stepText'>Find an e-scooter near you on the map in the app.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step2} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 2</h2>
                                        <p className='stepText'>Scan the QR code to unlock your e-scooter and to start a ride.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step3} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 3</h2>
                                        <p className='stepText'>Push the e-scooter forward to flick the kickstand back, and you’re ready to go.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step4} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 4</h2>
                                        <p className='stepText'>To get moving, place one foot on the board and use the other foot to push off. Use the right acceleration lever to gain speed.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step5} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 5</h2>
                                        <p className='stepText'>Let go of the acceleration lever to decrease your speed or gently squeeze the left or right hand brake to slow down even more, and to come to a stop.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step6} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 6</h2>
                                        <p className='stepText'>Use the left and right indicators to signal your movements to other road users</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step7} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 7</h2>
                                        <p className='stepText'>When you’re done, park in a designated parking spot or find a safe place on the pavement away from pedestrians.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row className='py-5 d-flex align-items-center'>
                                <Col xl={4} md={3} sm={12} xs={12}>
                                    <Image src={step8} className="d-flex ms-auto" />
                                </Col>
                                <Col xl={8} md={9} sm={12} xs={12} className='centerItem'>
                                    <div className='px-5'>
                                        <h2 className = "step">Step 8</h2>
                                        <p className='stepText'>Pull the e-scooter back onto its kickstand, Tap “end ride” in the app and you’re done.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
                </Row>
            </div>
          <Footer/>
        </Container>
    );
};

export default Ride;