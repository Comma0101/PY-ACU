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
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <div className="container ">
      <div className="row row-cols-2">
        <div className="col">
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <div className="col">Here would be the address</div>
      </div>
    </div>
  );
}
