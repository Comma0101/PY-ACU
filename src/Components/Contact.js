import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Mapic from "./map.jpg";
const containerStyle = {
  width: "100%",
  height: "20vh",
};

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -34, lng: 150 }), []);
  console.log(center);
  return (
    <div className="container pt-5" id="About-Us">
      <div className="row row-cols-2">
        <div className="col">
          <img src={Mapic} class="img-fluid" alt="Responsive image"></img>
        </div>
        <div className="col position-relative">
          <div className="position-absolute top-50 start-50 translate-middle pb-2">
            <a
              type="button"
              className="btn btn-success"
              style={{ textDecoration: "none" }}
              href="https://www.google.com/maps/place/2150+E+South+St+%23108,+Long+Beach,+CA+90805/@33.8594632,-118.1661746,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd3318dcfa7ab5:0x30088b5cc0d36daa!8m2!3d33.8594632!4d-118.1661746"
            >
              Navigation
            </a>
            <p className="h5 pt-2">626-537-8738</p>
            <p className="h5 pt-2">562-470-6350</p>
            
          </div>
        </div>
      </div>
                <br></br>
      <p className="h9 ">2150 E South St #108, Long Beach, CA 90805</p>
    </div>
  );
}
