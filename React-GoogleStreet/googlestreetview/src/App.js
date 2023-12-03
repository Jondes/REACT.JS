import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StreetViewMap from "./components/StreetViewMap";

function App() {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">React Google Street View Map Example</h2>
      <StreetViewMap />
    </div>
  );
}

export default App;