import React from "react";
import "./Service.css";
const ServiceCards = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="row align-items-start">
        <div className="col">
          <div style={{ width: "40rem" }} className="container h-10">
            <section className="mx-auto my-5">
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
                      style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    <a>Foot Massage</a>
                  </h4>
                  <div className="row align-items-start">
                    <div className="col">
                      <p className="card-text">
                        This type of massage only pertains to the feet. In
                        essence, foot reflexology is the practice of stimulating
                        nerves in the foot that lead to relaxation and through
                        this stress reduction that leads to better overall
                        health. The benefits of stress reduction are well known
                        and documented in the scientific literature
                      </p>
                    </div>

                    <div className="col">
                      <p className="h5 font-weight-bold mb-4">Price</p>
                      <div className="row align-items-start">
                        <div className="col">30 mins</div>
                        <div className="col chip ms-3">20$</div>
                      </div>
                      <div className="row align-items-start">
                        <div className="col">60 mins</div>
                        <div className="col chip ms-3">30$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col chip ms-3">
          <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col"></div>
        <div className="col chip ms-3">20$</div>
      </div>
    </div>
  );
};

export default ServiceCards;
