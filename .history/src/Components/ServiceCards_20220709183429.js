import React from "react";
import "./Service.css";
import pic1 from "../Images/10.jpeg";
import pic2 from "../Images/6.jpeg";
import pic3 from "../Images/122.jpeg";
import pic4 from "../Images/9.jpeg";
const ServiceCards = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="row align-items-start">
        <div className="col">
          <div className="container h-10">
            <section className="mx-auto ">
              <div className="card booking-card border-0 v-2 mt-2 mb-3 rounded-bottom ">
                <img src={pic3} className="card-img-top" />

                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    <a>Acupuncture</a>
                  </h4>
                  <div className="col">
                    <p className="card-text">
                      Modern research has demonstrated acupuncture's effects on
                      the nervous system, endocrine and immune systems,
                      cardiovascular system, and digestive system. By
                      stimulating the body's various systems, acupuncture can
                      help to resolve pain, and improve sleep, digestive
                      function, and sense of well-being.
                    </p>
                  </div>

                  <div className="col">
                    <p className="h5 font-weight-bold mb-2 mt-2">Price</p>
                    <div className="row align-items-start"></div>
                    <div className="row align-items-start">
                      <div className="col">Now 50% OFF</div>
                      <div className="col chip ms-3">$60</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col">
          <div className="container h-10">
            <section className="mx-auto ">
              <div className="card booking-card border-0 v-2 mt-2 mb-4 rounded-bottom">
                <div
                  className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={pic4} className="img-fluid" />

                  <div
                    className="mask"
                    style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    <a>Combo Massage</a>
                  </h4>

                  <div className="col">
                    <p className="card-text">
                      Combo massage is including body massage and foot
                      reflexology. It is focus on your back and great for
                      eliminating pain for your shoulders and back. Deep tissue,
                      and Asian style reflexology into a massage session that is
                      sure to please even the most expert massage enthusiast.
                    </p>
                  </div>

                  <div className="col">
                    <p className="h5 font-weight-bold mb-2 mt-2">Price</p>
                    <div className="row align-items-start">
                      <div className="col">30 mins</div>
                      <div className="col chip ms-3">$40</div>
                    </div>
                    <div className="row align-items-start">
                      <div className="col">60 mins</div>
                      <div className="col chip ms-3">$60</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col">
          <div className="container h-10">
            <section className="mx-auto ">
              <div className="card booking-card border-0 v-2 mt-2 mb-3 rounded-bottom ">
                <img src={pic3} className="card-img-top" />

                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    <a>Acupuncture</a>
                  </h4>
                  <div className="col">
                    <p className="card-text">
                      Modern research has demonstrated acupuncture's effects on
                      the nervous system, endocrine and immune systems,
                      cardiovascular system, and digestive system. By
                      stimulating the body's various systems, acupuncture can
                      help to resolve pain, and improve sleep, digestive
                      function, and sense of well-being.
                    </p>
                  </div>

                  <div className="col">
                    <p className="h5 font-weight-bold mb-2 mt-2">Price</p>
                    <div className="row align-items-start"></div>
                    <div className="row align-items-start">
                      <div className="col">Now 50% OFF</div>
                      <div className="col chip ms-3">$60</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col">
          <div className="container h-10">
            <section className="mx-auto ">
              <div className="card booking-card border-0 v-2 mt-2 mb-4 rounded-bottom">
                <div
                  className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={pic4} className="img-fluid" />

                  <div
                    className="mask"
                    style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    <a>Combo Massage</a>
                  </h4>

                  <div className="col">
                    <p className="card-text">
                      Combo massage is including body massage and foot
                      reflexology. It is focus on your back and great for
                      eliminating pain for your shoulders and back. Deep tissue,
                      and Asian style reflexology into a massage session that is
                      sure to please even the most expert massage enthusiast.
                    </p>
                  </div>

                  <div className="col">
                    <p className="h5 font-weight-bold mb-2 mt-2">Price</p>
                    <div className="row align-items-start">
                      <div className="col">30 mins</div>
                      <div className="col chip ms-3">$40</div>
                    </div>
                    <div className="row align-items-start">
                      <div className="col">60 mins</div>
                      <div className="col chip ms-3">$60</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
