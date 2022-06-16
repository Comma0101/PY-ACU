import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic1 from "../Images/0.jpeg";
import Bar from "../Components/Bar";
export default function Gallary() {
  return (
    <div id="Gallary">
      <Container>
        <Row>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
