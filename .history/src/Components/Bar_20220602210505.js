import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Bar(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto d-block">
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/Home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/Contant">
                Page Contant
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;
