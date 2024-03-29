import React from "react";
import Streetview from "react-google-streetview";

function StreetViewMap() {
  const googleMapsKey = "AIzaSyDOxn8A90XLSRpMhMW9UgGW60kx3pRn6i4";

  const StreetMapOptions = {
    position: { lat: 55.8271775, lng: 20.742731 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div>
      <div
        style={{
          width: "850px",
          height: "550px",
          backgroundColor: "#cccccc",
        }}
      >
        <Streetview
          apiKey={googleMapsKey}
          streetViewPanoramaOptions={StreetMapOptions}
        />
      </div>
    </div>
  );
}

export default StreetViewMap;