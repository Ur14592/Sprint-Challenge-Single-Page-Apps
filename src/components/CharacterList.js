import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';



const CharacterList=()=> {
  // TODO: Add useState to track data from useEffect

  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

const getList = () => {
  axios 
  .get ("https://rickandmortyapi.com/api/character/") 
  .then(response => {
    const list = response.data.results;
    // console.log("Character Date", response.data.results);
    setList(list);
  })
};
getList();
  }, []);



  const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap:nowrap;
  padding:1.5rem;
  background:#5D4B43;
`;

  return (
    <div className="character-list">
      <Div>
      {list.map(character => {
        return(
          <CharacterCard 
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          />
        )
      })}
      </Div>
    </div>
  );
}

export default CharacterList;