import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";



const CharacterList=()=> {
  // TODO: Add useState to track data from useEffect

  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

const getList = () => {
  axios .get ("https://rickandmortyapi.com/api/character/") .then(response => {
    const list = response.data.results;
    console.log("Character Date", response.data.results);
    setList(list);
  })
};
getList();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {list.map(character => {
        return
      })}
    </section>
  );
}

export default CharacterList;