import React from "react";
import styled from 'styled-components';



const CardTitle = styled.h2`
  color: black;
  border-bottom:1rem solid yellow;
  &:hover {
    transform: translateY(-5px) scale(1.3);
    color: #00F2F2;
  }
`;
const Status = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;
  }
`;
const Species = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;
  }
`;

const Div = styled.div `
  
  width: 140px;
  max-height: 400px;
  margin-bottom: 20px;
  
`;
const CardImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: scale;
  flex-shrink: 2;
  &:hover {
    transform: translateY(-5px) scale(1.1);
  }
`;

const CharacterCard = (props) => {
  return(

    <Div >
      <CardImg className="characterimg" alt="character" src={props.image}  />
      <CardTitle>Name: {props.name}</CardTitle>
      <Status>Status: {props.status}</Status>
      <Species>Species: {props.species}</Species>
  </Div>
  )
};


export default CharacterCard;