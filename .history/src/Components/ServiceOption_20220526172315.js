import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceOption = (props) => {
  console.log(props);
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.Service}</Card.Title>
        <Card.Text>{props.Des}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceOption;
