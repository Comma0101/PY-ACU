import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Bar.css";

const handleScroll = () => {
  if (window.scrollY > 20) {
    document.querySelector(".navbar").className = "navbar scroll";
  } else {
    document.querySelector(".navbar").className = "navbar";
    console.log(window.scrollY);
  }
};

function Bar(props) {
  console.log(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll());
  }, []);
  return (
    <div>
      <nav style={{ height: "auto" }} className="navbar scroll">
        hello
      </nav>

      <nav style={{ height: "auto" }} className="navbar"></nav>
      {/* <Navbar variant="dark" fixed="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
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
