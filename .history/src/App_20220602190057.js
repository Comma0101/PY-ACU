import React, { useState } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import data from "./Data";
import Footer from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Contact from "./Components/Contact";
import ServiceOption from "./Components/ServiceOption";
import "./App.css";
import pic2 from "./Images/1.jpeg";
import pic3 from "./Images/6.jpeg";
import pic4 from "./Images/9.jpeg";
import pic5 from "./Images/10.jpeg";
import Bar from "./Components/Bar";
import Example from "./Components/Example";
console.log(data);
const App = () => (
  // <div>
  //   <Example />
  // </div>
  <div>
    <Example />
    <Container className="p-1">
      <Container className="pt-3 bg-light rounded-3 ">
        <Row className="p-12">
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic5} />
              <Card.Body>
                <Card.Title>body Massage</Card.Title>
                <Card.Text>
                  The benefits of receiving massage or bodywork treatments are
                  listed below and more, massage can: Alleviate low-back pain
                  and improve range of motion. A Enhance immunity by stimulating
                  lymph flow—the body's natural defense system. Exercise and
                  stretch weak, tight, or atrophied muscles. Help athletes of
                  any level prepare for, and recover from, strenuous workouts.
                  Increase joint flexibility.​ 30 Min $30 60 Min $50 90 Min $80
                </Card.Text>
              </Card.Body>
            </Card>
            {/* <ServiceOption url={"../2.jpeg"} /> */}
          </Col>
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Body Pressure</Card.Title>
                <Card.Text>
                  Massage is the practice of rubbing and kneading the body using
                  the hands. During a massage, a massage therapist will apply
                  gentle or strong pressure to the muscles and joints of the
                  body to ease pain and tension. A massage therapist is a person
                  trained in giving massages. 10 Min Neck &Shoulder $9.99, 30
                  Min Body Pressure $20
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic2} />
              <Card.Body>
                <Card.Title>Deep Tissue Massage</Card.Title>
                <Card.Text>
                  Deep tissue massage techniques are used to break up scar
                  tissue and physically break down muscle "knots" or adhesion
                  (bands of painful, rigid tissue) that can disrupt circulation
                  and cause pain, limited range of motion, and inflammation 60
                  Min $70
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic4} />
              <Card.Body>
                <Card.Title>Combo Massage</Card.Title>
                <Card.Text>
                  Combo massage is including body massage and foot reflexology.
                  It is focus on your back and great for eliminating pain for
                  your shoulders and back. Deep tissue, and Asian style
                  reflexology into a massage session that is sure to please even
                  the most expert massage enthusiast. ​ 60 Mins Combo Massage
                  $40 90 Mins Combo Massage $60
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Foot Massage</Card.Title>
                <Card.Text>
                  This type of massage only pertains to the feet. In essence,
                  foot reflexology is the practice of stimulating nerves in the
                  foot that lead to relaxation and through this stress reduction
                  that leads to better overall health. The benefits of stress
                  reduction are well known and documented in the scientific
                  literature. 30 Min $15 60 Min $20 60 Min $25 (with oil $ Hot
                  stone) 90 Min $30
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "auto", height: "80%" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Foot Massage</Card.Title>
                <Card.Text>
                  This type of massage only pertains to the feet. In essence,
                  foot reflexology is the practice of stimulating nerves in the
                  foot that lead to relaxation and through this stress reduction
                  that leads to better overall health. The benefits of stress
                  reduction are well known and documented in the scientific
                  literature. 30 Min $15 60 Min $20 60 Min $25 (with oil $ Hot
                  stone) 90 Min $30
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
          <ServiceOption src={pic2} Data={data} />
        </Col> */}
        </Row>
      </Container>
      <div className="container">
        <section className="mx-auto my-5" style="max-width: 23rem;">
          <div className="card booking-card v-2 mt-2 mb-4 rounded-bottom">
            <div
              className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Others/water-lily.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style="background-color: rgba(251, 251, 251, 0.15);"
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title font-weight-bold">
                <a>Fine Art Pictures Gallery</a>
              </h4>
              <ul className="list-unstyled list-inline mb-2">
                <li className="list-inline-item me-0">
                  <i className="fa fa-star fa-xs"> </i>
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa fa-star fa-xs"></i>
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa fa-star fa-xs"></i>
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa fa-star fa-xs"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star-half-alt fa-xs"></i>
                </li>
              </ul>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr className="my-4" />
              <p className="h5 font-weight-bold mb-4">Opening hours</p>
              <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
                <li>Tuesday - Friday</li>
                <li>
                  <div className="chip ms-3">10:00AM</div>
                </li>
                <li>
                  <div className="chip ms-0 me-0">6:00PM</div>
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
                <li>Saturday - Sunday</li>
                <li>
                  <div className="chip ms-3">9:00AM</div>
                </li>
                <li>
                  <div className="chip ms-0 me-0">7:00PM</div>
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
                <li>Monday</li>
                <li>
                  <div className="chip ms-3">CLOSED</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Contact />
    </Container>
  </div>
);

export default App;
