import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3HZlW2Wa-MywsGskq38vH6mtNTRqOzcw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return<Map/>>
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      style={{ width: 100, height: "100vh" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
