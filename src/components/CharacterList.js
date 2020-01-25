import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import Header from './Header'
import styled from 'styled-components';

export default function CharacterList() {

  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);

    // Creating state to save data from API Call
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character/");
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [search, setSearch] = useState("");
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(currentPage)
      .then(res => {
        let charactersData = res.data.results;
        
        setData(res.data.results);
        setCharacters(charactersData);
        setFilteredCharacters(charactersData);
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
      })
      .catch(err => console.log(err));
  }, [currentPage]);

  //console.log(data);
  //console.log(error)

    // This shows while the data is being processed
    if (!characters.length) {
      return <h1>Loading results...</h1>;
    } else {
      console.log(characters);
    }
  
    // Handlers
    function searchHandler(e) {
      setSearch(e.target.value);
      const newList = characters.filter(character => {
        return character.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
  
      setFilteredCharacters(newList);
    }
  
  function submitHandler(e) {
    e.preventDefault();
  }
  const GridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardDiv = styled.div`
  border: 1px solid black;
  width: 30%;
  min-width: 300px;
  max-width: 300px;
  margin: 1%;
  min-height: 150px;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
`;
  return (

    <section className="character-list">
      <Header />
      <form style={{ margin: "20px 0" }} onSubmit={submitHandler}>
        <label>
          Search:
          <input
            style={{ marginLeft: "5px" }}
            name="name"
            value={search}
            placeholder="insert name"
            onChange={searchHandler}
          />
          
        </label>
      </form>

      <GridDiv>
        {/* TODO: `array.map()` over your state here! */}
        {filteredCharacters.map(character => (
          <CardDiv>
            <CharacterCard  char={character} />
          </CardDiv>
        ))}
      </GridDiv>
    </section>
  );
}
