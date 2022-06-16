import React from "react";
import "./Example.css";
import Bar from "./Bar";
export default function Example() {
  return (
    <div>
      <header>
        <Bar />

        <div id="intro" className="view">
          <div className="mask rgba-black-strong">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-10">
                  <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                    Travel
                  </h2>

                  <hr className="hr-light" />

                  <h4 className="white-text my-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti consequuntur.
                  </h4>
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
