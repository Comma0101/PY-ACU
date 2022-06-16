import React from "react";
import image from "../2.jpeg";
import { Carousel } from "react-bootstrap";
const Landing = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="..2.jpeg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;
