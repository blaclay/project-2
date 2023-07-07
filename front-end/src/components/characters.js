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
            <li>Origin: {character.origin.name}</li>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
            <li>First Appearance: {character.episode}</li>
          </ul>
        </div>
      ))}
    </ul>
  </div>;
}

export default Characters;