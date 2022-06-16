import React, { Component, PropTypes } from "react";
import GoogleMap from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Contact() {
  const propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
  };

  const defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  return (
    <GoogleMap
      // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
      center={defaultProps.center}
      zoom={defaultProps.zoom}
    ></GoogleMap>
  );
}
