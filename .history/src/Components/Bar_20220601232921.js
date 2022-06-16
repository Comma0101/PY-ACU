import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
function Bar(props) {
  return (
    <div>
      <Navbar className="fixed-top b-2" bg="#778da9">
        <Container>
          <Navbar.Brand href="/">ACUSPA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/gallary">Gallary</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bar;
