import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
function Bar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#best-features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#examples">
                  Examples
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
