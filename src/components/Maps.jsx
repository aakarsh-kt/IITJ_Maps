// import React, { useRef, useEffect, useState } from "react";
// import * as maptilersdk from "@maptiler/sdk";
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// // import "./map.css";

// export default function Map() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const iit = { lng: 73.11, lat: 26.47 };
//   const [zoom] = useState(14);
//   maptilersdk.config.apiKey = "KcBSNOlYuMPgsQslowmQ";

//   useEffect(() => {
//     if (map.current) return; // stops map from intializing more than once

//     map.current = new maptilersdk.Map({
//       container: mapContainer.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [iit.lng, iit.lat],
//       zoom: zoom,
//     });
//     new maptilersdk.Marker({ color: "#FF0000" })
//       .setLngLat([73.11, 26.47])
//       .addTo(map.current);
//   }, [iit.lng, iit.lat, zoom]);

//   // let southWest = [iit.lat+0.004,iit.lng+0.004] // Example: New York City
//   // let northEast = [iit.lat-0.004,iit.lng-0.004] // Example: New York City
//   // // let northEast = L.latLng(40.774, -74.125); // Example: New York City
//   // let bounds = [southWest, northEast];

//   //   map.fitBounds(bounds);

//   return (
//     <div className="map-wrap">
//       <div ref={mapContainer} className="map" />
//     </div>
//   );
// }
import React, { useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
const Map = () => {
  useEffect(() => {
    // Load the Google Maps JavaScript API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map once the script is loaded
    window.initMap = initMap;

    // Clean up function to remove the script from the DOM
    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  // Function to initialize the map
  const initMap = () => {
    // Create a new map instance
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 26.47, lng: 73.11 }, // Default center (San Francisco)
      zoom: 16, // Default zoom level
    });

    // You can add more map options, markers, etc. here
  };

  return <div id="map"></div>;
};

export default Map;
