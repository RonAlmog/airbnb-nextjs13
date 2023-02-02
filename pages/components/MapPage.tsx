import { useState } from "react";
import Map, {
  ViewStateChangeEvent,
  Marker,
  Popup,
  NavigationControl,
} from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";

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

  const center = getCenter(coordinates);
  let longitude = 0;
  let latitude = 0;
  if (center) {
    longitude = center.longitude;
    latitude = center.latitude;
  }

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 12,
  });

  return (
    <Map
      {...viewState}
      //style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/ronalmog/cldkz3n25007d01mi9jx7e1gs"
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.mapbox_key}
      minZoom={3}
      maxZoom={18}
      onMove={(event: ViewStateChangeEvent) => setViewState(event.viewState)}
    >
      {searchResults.map((result) => {
        return (
          <Marker
            key={result.long}
            longitude={result.long}
            latitude={result.lat}
          >
            <div className="text-xl">🏠</div>
          </Marker>
        );
      })}

      <NavigationControl showCompass={true} position={"top-right"} />
    </Map>
  );
}

export default MapPage;
