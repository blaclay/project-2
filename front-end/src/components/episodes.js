import React, { useState, useEffect }  from "react";

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
    <h1>Episode List</h1>
    <ul className="Episodes">
      {episodeList.map((episode, i) => (
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