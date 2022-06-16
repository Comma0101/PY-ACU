import React from "react";
import "./Example.css";
export default function Example() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar ">
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
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="intro" className="view">
          <div className="mask rgba-black-strong">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-10">
                  <h3 className="display-4 font-weight-bold white-text pt-5 mb-2">
                    ACU-SPA
                  </h3>

                  <hr className="hr-light" />

                  <h4 className="white-text my-4">Mind Body Balance!!</h4>
                  <button type="button" className="btn btn-outline-white">
                    Read more<i className="fa fa-book ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
