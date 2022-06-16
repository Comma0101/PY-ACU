import React from "react";

function Footer() {
  return (
    <div>
      <div className="card fixed-bottom ">
        {/* <h5 className="card-header">Featured</h5> */}
        <div className="card-body ">
          <h5 className="card-title">Special title treatment</h5>
        </div>
      </div>
      <div className="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
