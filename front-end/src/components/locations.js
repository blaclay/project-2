import React from "react";

function Locations() {
    var data = require("../db/db.json");

  return <div>
    <h1>Locations</h1>
    <ul className="Locations">
      {data.locations.map((location, i) => (
        <div key={i}>
          <h2>{location.name}</h2>
          <ul>
            <li>Type: {location.type}</li>
            <li>Residents: {location.residents}</li>
          </ul>
        </div>
      ))}
    </ul>
  </div>;
}

export default Locations;