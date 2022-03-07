import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import appimg from './../../../Images/app.png';
import ios from './../../../Images/app-store.png';
import play from './../../../Images/google-play.png';

const AppBanner = () => {
    return (
        <div className='bg-img'>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <Image src={appimg}  className='imgSize' />
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <div className='ap-center'>
                            <h6>DOWNLOAD OUR APP</h6>
                            <h2>Find An Available Scooter Near You With Our App</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <div>
                                <Image src={ios} style={{width:"25%" }}/>
                                <Image src={play} style={{width:"30%" }}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppBanner;