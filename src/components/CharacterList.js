import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import Header from './Header'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  //console.log(data);
  //console.log(error)

  return (
    <section className="character-list">
      <Header />
      {/* TODO: `array.map()` over your state here! */}
      {data.map(character => (
        <CharacterCard  char={character} />
      ))}
    </section>
  );
}
