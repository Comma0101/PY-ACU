import React, { useState } from "react";

import {
  Toast,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Carousel,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ServiceOption from "./Components/ServiceOption";
import Landing from "./Components/Landing";
import "./App.css";
import pic1 from "./Components/2.jpeg";
import pic2 from "./Images/1.jpeg";
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
    <Container className="p-5 mb-4 bg-light rounded-3">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ;
    </Container>
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
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Body Massage</Card.Title>
              <Card.Text>
                The benefits of receiving massage or bodywork treatments are
                listed below and more, massage can: Alleviate low-back pain and
                improve range of motion. A Enhance immunity by stimulating lymph
                flow—the body's natural defense system. Exercise and stretch
                weak, tight, or atrophied muscles. Help athletes of any level
                prepare for, and recover from, strenuous workouts. Increase
                joint flexibility.​ 30 Min $30 60 Min $50 90 Min $80
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <ServiceOption url={"../2.jpeg"} /> */}
        </Col>
        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Deep Tissue Massage</Card.Title>
              <Card.Text>
                Deep tissue massage techniques are used to break up scar tissue
                and physically break down muscle "knots" or adhesion (bands of
                painful, rigid tissue) that can disrupt circulation and cause
                pain, limited range of motion, and inflammation 60 Min $70
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Combo Massage</Card.Title>
              <Card.Text>
                Combo massage is including body massage and foot reflexology. It
                is focus on your back and great for eliminating pain for your
                shoulders and back. Deep tissue, and Asian style reflexology
                into a massage session that is sure to please even the most
                expert massage enthusiast. ​ 60 Mins Combo Massage $40 90 Mins
                Combo Massage $60
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Foot Massage</Card.Title>
              <Card.Text>
                This type of massage only pertains to the feet. In essence, foot
                reflexology is the practice of stimulating nerves in the foot
                that lead to relaxation and through this stress reduction that
                leads to better overall health. The benefits of stress reduction
                are well known and documented in the scientific literature. 30
                Min $15 60 Min $20 60 Min $25 (with oil $ Hot stone) 90 Min $30
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  </Container>
);

export default App;
