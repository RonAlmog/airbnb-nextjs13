"use client";
import { useEffect, useState } from "react";
import Map, {
  ViewStateChangeEvent,
  Marker,
  Popup,
  NavigationControl,
  PopupEvent,
} from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

type Params = {
  searchResults: Info[];
};
function MapPage({ searchResults }: Params) {
  useEffect(() => {}, []);

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

  const [selectedLocation, setSelectedLocation] = useState<any>({
    lat: "123",
    long: "234",
  });
  // console.log("selectedLocation", selectedLocation);
  // console.log("searchResults", searchResults);
  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/ronalmog/cldkz3n25007d01mi9jx7e1gs"
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.mapbox_key}
      minZoom={3}
      maxZoom={18}
      onMove={(event: ViewStateChangeEvent) => setViewState(event.viewState)}
    >
      {searchResults &&
        searchResults.map((result) => {
          return (
            <div key={result.long}>
              <Marker longitude={result.long} latitude={result.lat}>
                <p
                  role="img"
                  className="text-2xl cursor-pointer"
                  onClick={() => setSelectedLocation(result)}
                  aria-label="push-pin"
                >
                  🏠
                </p>
              </Marker>
              {selectedLocation.long === result.long ? (
                <Popup
                  className="p-0 m-0"
                  key={result.long}
                  latitude={result.lat}
                  longitude={result.long}
                  anchor="bottom"
                  closeOnClick={false}
                  onClose={(e: PopupEvent) => {
                    setSelectedLocation({ lat: "123", long: "234" });
                  }}
                >
                  <div className="p-3 bg-green-200 border-green-600 border-2 rounded-md hover:shadow-lg hover:scale-105 transition transform duration-200 ease-out z-50">
                    <h3 className="text-sm">{result.title}</h3>
                    <div className="relative h-24 w-44">
                      <Image
                        src={result?.img}
                        fill
                        alt={result?.title}
                        className="rounded-md"
                      />
                    </div>

                    <p>{result.description}</p>
                  </div>
                </Popup>
              ) : (
                false
              )}
            </div>
          );
        })}

      <NavigationControl showCompass={true} position={"top-right"} />
    </Map>
  );
}

export default MapPage;
