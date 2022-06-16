import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Bar.css";
function Bar(props) {
  return (
    <div>
      <Navbar
        scrolling="true"
        variant="dark"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
      </Navbar>
    </div>
  );
}

export default Bar;
