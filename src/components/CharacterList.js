import React, { useEffect, useState, useLocalStorage } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);

  // Declaring state variables
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [search, setSearch] = useState("");

  // stretch: useLocalStorage
  const [name, setName] = useLocalStorage("name", "Jerry Smith");
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
        setPrevPage(res.data.info.prev);
        setNextPage(res.data.info.next);
      })
      .catch(err => console.log(err));
  }, [currentPage]);
  console.log("previous page:", prevPage);
  //console.log(data);
  //console.log(error)

  // This shows while the data is being processed
  if (!characters.length) {
    return <h1 className="loading-results">Loading results...</h1>;
  } else {
    console.log(characters);
  }

  // Handlers
  function searchHandler(e) {
    setSearch(e.target.value);
    const newList = characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setFilteredCharacters(newList);
    setName(e.target.value);
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
    min-width: 12rem;
    margin: 1%;
    padding: 1rem;
  `;

  const Button = styled.button`
    background-color: #52331a;
    color: #bdada0;
    font-weight: 600;
    font-size: 1.2rem;
    min-height: 3.7rem;
    height: 3.7rem;

  `;

  return (
    <section className="character-list">
      <div className="ui centered">
        <Header />
        <div className="fix-height">
          <form onSubmit={submitHandler}>
            <label>
              <span>Name</span>
              <input
               
                name="name"
                type="text"
                value={search}
                placeholder="Character's name"
                onChange={searchHandler}
              />
            </label>
            <Button type="submit"><span className="button-text fixed-height">Search</span></Button>
          </form>
        </div>
      </div>
      <GridDiv>
        {/* TODO: `array.map()` over your state here! */}
        {filteredCharacters.map(character => (
          <CardDiv>
            <CharacterCard char={character} />
          </CardDiv>
        ))}
      </GridDiv>

      {/* Only render this button if there is a prevPage */}
      {prevPage && (
        <button
          className="pagination-button fixed-height button-text separate-buttons"
          onClick={() => setCurrentPage(prevPage)}
        >
          <span class="button-text">Previous Page</span>
        </button>
      )}

      {/* Only render this button if there is a nextPage*/}
      {nextPage && (
        <button
          className="pagination-button fixed-height button-text separate-button"
          onClick={() => setCurrentPage(nextPage)}
        >
          <span class="button-text">Next Page</span>
        </button>
      )}
    </section>
  );

  //Hook
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }
}
