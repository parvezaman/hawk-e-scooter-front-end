import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigaton = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="title ">HAWK</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="navStyle" to="/home">
                Home
              </Link>
              <Link className="navStyle" to="/ebooking">
                E-Booking
              </Link>
              <Link className="navStyle" to="/package">
                Package
              </Link>
              <Link className="navStyle" to="/ride">
                How to Ride
              </Link>
              <Link className="navStyle" to="/contct">
                Contact us
              </Link>
              <Link className="navStyle" to="/users">
                Dashbord
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigaton;
