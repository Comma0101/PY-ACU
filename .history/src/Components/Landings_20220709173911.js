import React from "react";
import "./Landings.css";
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
                  <h5
                    style={{ color: "black" }}
                    className="display-2 font-weight-bold white-text pt-5 mb-3 inline"
                  >
                    PY ACU & SPA
                  </h5>

                  {/* <hr className="hr-light" /> */}

                  <h4 className="white-text my-4" style={{ color: "black" }}>
                    Mind Body Balance!!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
