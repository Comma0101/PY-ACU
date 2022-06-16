import React from "react";
import "./Service.css";
const ServiceCards = (props) => {
  // console.log(props);
  return (
    <div style={{ maxwidth: "23rem" }} className="container">
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
            {/* <ul className="list-unstyled list-inline mb-2">
              <li className="list-inline-item me-0">
                <i className="fa fa-star fa-xs"> </i>
              </li>
              <li className="list-inline-item me-0">
                <i className="fa fa-star fa-xs"></i>
              </li>
              <li className="list-inline-item me-0">
                <i className="fa fa-star fa-xs"></i>
              </li>
              <li className="list-inline-item me-0">
                <i className="fa fa-star fa-xs"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star-half-alt fa-xs"></i>
              </li>
            </ul> */}
            <p className="card-text">
              This type of massage only pertains to the feet. In essence, foot
              reflexology is the practice of stimulating nerves in the foot that
              lead to relaxation and through this stress reduction that leads to
              better overall health. The benefits of stress reduction are well
              known and documented in the scientific literature
            </p>
            <hr className="my-4" />
            <p className="h5 font-weight-bold mb-4">Price</p>
            <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
              <li>30 Mins</li>
              <li>
                <div className="chip ms-3">20$</div>
              </li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
              <li>60 Mins</li>
              <li>
                <div className="chip ms-3">30$</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCards;
