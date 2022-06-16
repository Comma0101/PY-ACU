import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

export default function Contact(props) {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    </div>
  );
}
