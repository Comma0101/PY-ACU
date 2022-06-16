import React from "react";
import { Container, Nav } from "react-bootstrap";
function Navbar(props) {
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ACUSPA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gallary</Nav.Link>
            <Nav.Link href="#features">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;
