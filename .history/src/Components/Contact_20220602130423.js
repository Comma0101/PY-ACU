import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Contact = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

<Contact
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3HZlW2Wa-MywsGskq38vH6mtNTRqOzcw"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>;
export default Contact;
