import React, { PropTypes, Component } from "react/addons";

import GoogleMap from "google-map-react";

const MyGreatPlace = <div>{this.props.text}</div>;
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
        <MyGreatPlace
          lat={59.955413}
          lng={30.337844}
          text={"A"} /* Kreyser Avrora */
        />
      </GoogleMap>
    );
  }
}
