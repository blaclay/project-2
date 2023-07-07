import React from "react";
// import { characters } from "../db/db";

function Characters() {
    var data = require("../db/db.json");

  return <div>
    <h1>Characters</h1>
    <ul className="Characters">
      {data.characters.map((character, i) => (
        <div key={i}>
          <h2>{character.name}</h2>
          <ul>
            <li>Status: {character.status}</li>
          </ul>
          {/* <ul>
            {character.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </ul>
  </div>;
}

export default Characters;