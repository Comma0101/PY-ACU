import React from "react";
import "./Service.css";
const ServiceCards = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="row align-items-start">
        <div className="col">30 mins</div>
        <div className="col chip ms-3">20$</div>
      </div>
      <div className="row align-items-start">
        <div className="col"></div>
        <div className="col chip ms-3">20$</div>
      </div>
    </div>
  );
};

export default ServiceCards;
