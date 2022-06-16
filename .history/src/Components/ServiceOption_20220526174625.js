import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceOption = (props) => {
  console.log(props);
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.Data.Service}</Card.Title>
        {/* <Card.Subtitle>{props.Price}</Card.Subtitle> */}
        <Card.Text>{props.Des}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceOption;
