import React, { useState } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import data from "./Data";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Contact from "./Components/Contact";
import ServiceCards from "./Components/ServiceCards";
import ServiceView from "./Components/ServiceView";
import "./App.css";
import pic2 from "./Images/1.jpeg";
import pic3 from "./Images/6.jpeg";
import pic4 from "./Images/9.jpeg";
import pic5 from "./Images/10.jpeg";
import Bar from "./Components/Bar";
import Example from "./Components/Example";
const App = () => (
  <div>
    <Example />
    <Container className="p-1">
      <ServiceView />
      <ServiceCards />

      <Contact />
    </Container>
  </div>
);

export default App;
