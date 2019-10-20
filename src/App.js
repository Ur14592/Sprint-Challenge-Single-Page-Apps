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
  flex-wrap:wrap;
  padding:1.5rem;
  background:#5D4B43;
`;
export default function App() {
  return (
    <div>
    <Header />
    <Div>
      <CharacterList/>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </Div>
    </div>
  );
}
