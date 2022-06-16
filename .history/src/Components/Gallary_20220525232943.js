import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic1 from "../Images/6jpeg";
export default function Gallary() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Image
              thumbnail="true"
              roundedCircle="true"
              alt="171x180"
              src={pic1}
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              thumbnail="true"
              roundedCircle="true"
              alt="171x180"
              src={pic1}
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              thumbnail="true"
              roundedCircle="true"
              alt="171x180"
              src={pic1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
