import React from "react";
import "./Example.css";
import Bar from "./Bar";

export default function Landings() {
  return (
    <div>
      <header>
        <Bar />
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
