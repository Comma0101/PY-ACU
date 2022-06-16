import React from "react";
import "./Example.css";
import Bar from "./Bar";

export default function Example() {
  return (
    <div>
      <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <div class="container">
            <a class="navbar-brand" href="#">
              Web Zone
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mx-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="intro" className="view">
          <div className="mask rgba-black-strong">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-15">
                  <h5 className="display-2 font-weight-bold white-text pt-5 mb-3 inline">
                    ACU SPA
                  </h5>

                  <hr className="hr-light" />

                  <h4 className="white-text my-4">Mind Body Balance!!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
