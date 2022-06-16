import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Bar.css";

function Bar(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar id="navbar1" fixed="top" collapseOnSelect expand="lg">
        <Container
          data-bs-spy="scroll"
          data-bs-target="#navbar1"
          data-bs-offset="0"
          className="scrollspy-example"
          tabindex="0"
        >
          <Navbar.Brand href="#intro">ACU-SPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Gallary">Gallary</Nav.Link>
              <Nav.Link href="#About-Us">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bar;
