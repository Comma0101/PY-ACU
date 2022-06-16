import React, { Component, PropTypes } from "react";
import GoogleMap from "google-map-react";
import shouldPureComponentUpdate from "react-pure-render/function";
import { propTypes } from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Contact extends Component {
  props = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  render() {
    console.log("hello", this.defaultProps.zoom);
    return (
      <GoogleMap
        apiKey={"AIzaSyC3HZlW2Wa-MywsGskq38vH6mtNTRqOzcw"} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
      ></GoogleMap>
    );
  }
}
