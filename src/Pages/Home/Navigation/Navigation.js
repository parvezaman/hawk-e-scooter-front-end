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
            <h3 className="title ">HAK</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="navStyle me-3" to="/">
                Dashbord
              </Link>
              <Link className="navStyle me-3" to="/howtowork">
                How To Work
              </Link>
              <Link className="navStyle me-3" to="/registration">
                Registration
              </Link>
              <Link className="navStyle me-3" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigaton;
