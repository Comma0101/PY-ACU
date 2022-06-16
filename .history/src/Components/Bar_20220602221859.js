import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Bar.css";
function Bar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#best-features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#examples">
                  Examples
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar variant="dark" fixed="top" collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav classNameName="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              Something
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default Bar;
