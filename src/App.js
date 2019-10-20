import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import styled from 'styled-components';
import WelcomePage from "./components/WelcomePage";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding:1rem;
  background:white;
`;
export default function App() {
  

  return (
    <main>
    <Header />
    <Div>
      {/* <CharacterList/> */}
      {/* <input name="filter" value={filter} onChange={filterChanges}></input> */}
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList}/>
    </Div>
    </main>
  );
}
