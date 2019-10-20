import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import styled from 'styled-components';

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
    </Div>
    </div>
  );
}
