import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';

function Locations() {
  // var data = require("../db/db.json");

  const [locationsList, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/locations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocations(data);
      });
  }, []);

  return <div>
    <h1 class="p-3 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3">Locations & Locales</h1>
    <ul className="Locations">
      {locationsList.map((location, i) => (
        <div key={i}>
          <Accordion>
            <Accordion.Header>{location.name}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Type of Location: {location.type}</li>
                <li>Dimension: {location.dimension}</li>
                <li>Residents: {location.residents}</li>
              </ul>
            </Accordion.Body>
          </Accordion>
        </div>
      ))}
    </ul>
  </div>;
}

export default Locations;