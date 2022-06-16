import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic1 from "../Images/0.jpeg";
export default function Gallary() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
