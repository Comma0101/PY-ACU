import React, { useState } from "react";

import { Toast, Navbar, Nav, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ServiceOption from "./Components/ServiceOption";
import Landing from "./Components/Landing";
import "./App.css";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-7">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Nassvbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Landing />
    {/* <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast> */}

    <Container className="p-5 mb-4 bg-light rounded-3">
      <Row>
        <Col>
          <ServiceOption url={"../2.jpeg"} />
        </Col>
        <Col>
          <ServiceOption url={"../3.jpeg"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ServiceOption url={"../4.jpeg"} />
        </Col>
        <Col>
          <ServiceOption />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default App;
