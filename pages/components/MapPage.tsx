import { useState } from "react";
import Map, { ViewStateChangeEvent } from "react-map-gl";
import { getCenter } from "geolib";

type Params = {
  searchResults: Info[];
};
function MapPage({ searchResults }: Params) {
  let coordinates = [
    {
      latitude: 0,
      longitude: 0,
    },
  ];

  // transform the searchResults into like {latitude: 123, longitude: 456}
  if (searchResults) {
    coordinates = searchResults.map((item) => ({
      latitude: item.lat,
      longitude: item.long,
    }));
  }
  console.log("coordinates", coordinates);
  const center = getCenter(coordinates);
  console.log("center", center);
  let longitude = 0;
  let latitude = 0;
  if (center) {
    longitude = center.longitude;
    latitude = center.latitude;
  }

  const [viewport, setViewport] = useState({
    longitude,
    latitude,
    zoom: 8,
  });

  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/ronalmog/cldkz3n25007d01mi9jx7e1gs"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e: ViewStateChangeEvent) => {
        console.log(e.viewState);
        setViewport(e.viewState);
      }}
    ></Map>
  );
}

export default MapPage;
