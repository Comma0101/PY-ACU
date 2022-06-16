import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
function Bar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto smooth-scroll">
              <li class="nav-item">
                <a class="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#best-features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#examples">
                  Examples
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
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
