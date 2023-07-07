import React from "react";

function Episodes() {
    var data = require("../db/db.json");

  return <div>
    <h1>Episode List</h1>
    <ul className="Episodes">
      {data.episodes.map((episode, i) => (
        <div key={i}>
          <h2>{episode.episode} {episode.name}</h2>
          <ul>
            <li>Air Date: {episode.air_date}</li>
            <li>Featured Characters: {episode.characters}</li>
          </ul>
        </div>
      ))}
    </ul>
  </div>;
}

export default Episodes;