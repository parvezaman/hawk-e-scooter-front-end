import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import sc from './../../../Images/sc1.jpg';
import GroupIcon from '@mui/icons-material/Group';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PaymentIcon from '@mui/icons-material/Payment';

const Collections = () => {
    return (
        <Container>
            <div>
            <h6>Our Collection</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h2>Choose The Best Scooter</h2>
                </div>
                <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button className='btn-info px-4 fw-bolder fs-5 text-white border-0 rounded'>All Vihicle</button>
            </div>
            <Row className='my-5'>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                    <div className='card'>
                        <div className='cardDetails'>
                            <div className='mb-5'>
                                <Image src={sc} alt="Scooter-image" className='img-thumbnail border-0'/>
                            </div>
                            <h2 className='mb-5'>Model 1</h2>
                            <p><GroupIcon /> Max passengers : 1 People</p>
                            <p><AirportShuttleIcon /> Max passengers : 1 People</p>
                            <p><LocalGasStationIcon /> Fuel : Gasoline</p>
                            <p><PaymentIcon /> Fully Insured</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                    <div className='card'>
                        <div className='cardDetails'>
                            <div className='mb-5'>
                                <Image src={sc} alt="Scooter-image" className='img-thumbnail border-0'/>
                            </div>
                            <h2 className='mb-5'>Model 1</h2>
                            <p><GroupIcon /> Max passengers : 1 People</p>
                            <p><AirportShuttleIcon /> Max passengers : 1 People</p>
                            <p><LocalGasStationIcon /> Fuel : Gasoline</p>
                            <p><PaymentIcon /> Fully Insured</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                    <div className='card'>
                        <div className='cardDetails'>
                            <div className='mb-5'>
                                <Image src={sc} alt="Scooter-image" className='img-thumbnail border-0'/>
                            </div>
                            <h2 className='mb-5'>Model 1</h2>
                            <p><GroupIcon /> Max passengers : 1 People</p>
                            <p><AirportShuttleIcon /> Max passengers : 1 People</p>
                            <p><LocalGasStationIcon /> Fuel : Gasoline</p>
                            <p><PaymentIcon /> Fully Insured</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Collections;