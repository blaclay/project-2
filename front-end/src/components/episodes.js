import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';

function Episodes() {
  // var data = require("../db/db.json");
  const [episodeList, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/episodes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEpisodes(data);
      });
  }, []);

  return <div>
    <h1 class="p-3 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3">Episode List</h1>
    <ul className="Episodes">
      {episodeList.map((episode, i) => (
        <div key={i}>
          <Accordion>
            <Accordion.Header>{episode.episode} {episode.name}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Air Date: {episode.air_date}</li>
                <li>Featured Characters: {episode.characters}</li>
              </ul>
            </Accordion.Body>
          </Accordion>
        </div>
      ))}
    </ul>
  </div>;
}

export default Episodes;