import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';


const CharacterList= () => {
  // TODO: Add useState to track data from useEffect

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

const getList = () => {
  axios 
  .get ("https://rickandmortyapi.com/api/character/") 
  .then(response => {
    const list = response.data.results;
    console.log("Character Date", response.data.results);
    setList(list);
  })
};
getList();
  }, []);

  const filterChange = event => {
    event.preventDefault();
    setFilter(event.target.value);
  }

  const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap:nowrap;
  justify-content: space-between;

  padding:1.5rem;
  background:teal;
`;
const P = styled.h3`
font-size:1rem;
color:black;
`;

  return (
    <div className="character-list">


      <form className="search">
        <P>
      <label htmlFor="title">Search for Rick and Morty Characters</label>
      </P>
        <input
        type="text"
        onChange={filterChange}
        value={filter}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search by name"
        /> 
      </form>



      <Div>
      {list.map(character => {
        if (character.name.toLowerCase().includes(filter.toLowerCase())){
        return(
          <CharacterCard 
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          />
        )
        } else { 
          console.log(character.name.toLowerCase)}
      })}
      </Div>
    </div>
  );
}

export default CharacterList;