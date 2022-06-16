import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50vh",
};

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3HZlW2Wa-MywsGskq38vH6mtNTRqOzcw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -34, lng: 150 }), []);
  console.log(center);
  return (
    <div className="container pb-5" id="About-Us">
      <div className="row row-cols-2">
        <div className="col">
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={8}
            center={{ lat: 44, lng: -80 }}
          >
            <Marker position={{ lat: 44, lng: -80 }} />
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          </GoogleMap>
        </div>
        <div className="col position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <p className="h2">Location:</p>
            <p className="h3">2150 E South St #108, Long Beach, CA 90805</p>
            <p className="h2">Tel: 210-000-0000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
