import React, { Component, PropTypes } from "react";
import GoogleMap from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Contact() {
  const defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  return (
    <GoogleMap
      apiKey={"AIzaSyC3HZlW2Wa-MywsGskq38vH6mtNTRqOzcw"}
      center={defaultProps.center}
      zoom={defaultProps.zoom}
    ></GoogleMap>
  );
}
