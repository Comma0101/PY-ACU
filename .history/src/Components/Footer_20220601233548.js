import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Navbar
        className="navbar"
        sticky-bottom
        style={{ backgroundColor: "#778da9" }}
      >
        <Container>
          <Navbar.Brand href="/">Footer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/gallary">Gallary</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
