import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pic1 from "../Images/0.jpeg";
import pic2 from "../Gallary/2.jpg";
import pic3 from "../Gallary/3.jpg";
import pic4 from "../Gallary/4.jpg";
import pic5 from "../Gallary/5.jpg";
import pic6 from "../Gallary/6.jpg";
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
            <Image fluid="true " alt="171x180" src={pic2} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic3} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic4} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic5} />
          </Col>
          <Col className="p-3 t-3" xs={6} md={4}>
            <Image fluid="true " alt="171x180" src={pic6} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
