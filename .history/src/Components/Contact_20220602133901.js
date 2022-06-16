import React, { Component, PropTypes } from "react";
import GoogleMap from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Contact extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"A"} /* Kreyser Avrora */
        />
        <AnyReactComponent
          {...this.props.greatPlaceCoords}
          text={"B"} /* road circle */
        />
      </GoogleMap>
    );
  }
}
