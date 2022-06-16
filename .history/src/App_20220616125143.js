import React, { useState } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import data from "./Data";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Contact from "./Components/Contact";
import ServiceCards from "./Components/ServiceCards";
import ServiceView from "./Components/ServiceView";
import "./App.css";
import Gallary from "./Components/Gallary";
import Landings from "./Components/Landings";
const App = () => (
  <div>
    <Landings />
    <Container className="p-1">
      {/* <ServiceView /> */}
      <ServiceCards />
      <Gallary />
      <Contact />
    </Container>
  </div>
);

export default App;
