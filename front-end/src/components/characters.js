import React, { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
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

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/episode")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // var countPage = data.info.pages;
  //       var nextPageURL = data.info.next;
  //       setCharacterEpisode(data.results);
  //       while (nextPageURL) {
  //         fetch(nextPageURL)
  //           .then((response2) => response2.json())
  //           .then((data2) => {
  //             nextPageURL = data2.info.next
  //             console.log(data2);
  //             setCharacterEpisode([...charactersEpisodeList, ...(data2.results)]);
  //             console.log(charactersEpisodeList);
  //           });
  //       }
  //     });
  // }, []);

  return <div>
    <h1 class="p-3 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3">Characters</h1>
    <ul className="Characters">
      {charactersList.map((character, i) => (
        <div key={i}>
          <Accordion>
            <Accordion.Header>{character.name}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Origin: {character.origin.name}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Status: {character.status}</li>
                <li>First Appearance: {character.episode[0]}</li>
              </ul>
            </Accordion.Body>
          </Accordion>
        </div>
      ))}
    </ul>
  </div>;
}

export default Characters;