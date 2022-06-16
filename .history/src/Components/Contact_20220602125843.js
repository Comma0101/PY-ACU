import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

export default function Contact(props) {
  const MyMapComponent = (props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  );
  return (
    <MyMapComponent isMarkerShown /> // Map with a Marker
  );
}
