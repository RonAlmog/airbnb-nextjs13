import { useState } from "react";
import Map from "react-map-gl";

function MapPage() {
  const [viewport, setViewport] = useState({
    longitude: -79,
    latitude: 44,
    zoom: 8,
  });
  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/ronalmog/cldkz3n25007d01mi9jx7e1gs"
      mapboxAccessToken={process.env.mapbox_key}
    ></Map>
  );
}

export default MapPage;
