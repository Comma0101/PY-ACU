import React, { useState } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import data from "./Data";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import ServiceOption from "./Components/ServiceOption";
import "./App.css";
import pic2 from "./Images/1.jpeg";
import Bar from "./Components/Bar";
console.log(data);
const App = () => (
  <Container className="p-7">
    <Bar />
    <Container className="p-5 mb-4 bg-light rounded-3 ">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="First slide" />
          <Carousel.Caption className="d-flex text-dark t-1 align-items-center justify-content-center">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>

    <Container className="p-5 mb-4 bg-light rounded-3 justify-content-center ">
      <Row className="">
        <Col>
          <Card style={{ width: "26rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>body Massage</Card.Title>
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
          <Card style={{ width: "26rem" }}>
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
      <Row className="">
        <Col>
          <Card style={{ width: "26rem" }}>
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
          <Card style={{ width: "26rem" }}>
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
        {/* <Col>
          <ServiceOption src={pic2} Data={data} />
        </Col> */}
      </Row>
    </Container>
    <Footer />
  </Container>
);

export default App;
