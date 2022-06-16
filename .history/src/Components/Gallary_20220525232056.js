import React from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
export default function Gallary() {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="/2.jpeg" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="/2.jpeg" />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail href="#" alt="171x180" src="/2.jpeg" />
          </Col>
        </Row>
      </Grid>
      ;
    </div>
  );
}
