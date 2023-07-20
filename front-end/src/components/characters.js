import React, { useState, useEffect } from "react";
// import { characters } from "http://localhost:4000/db/db";

function Characters() {
    // var data = require("4000/db/db.json");
    
  const [charactersList, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, []);

  return <div>
    <h1>Characters</h1>
    <ul className="Characters">
      {charactersList.map((character, i) => (
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