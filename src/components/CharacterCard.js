import React from "react";
import styled from 'styled-components';



const CardTitle = styled.h2`
  color: #1C59B8;
  border-top:1rem solid #0075F2;
  text-shadow:6px 6px  #444
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
const Container = styled.div`
width:44rem;
`;
const Div = styled.div `

  width: 140px;
  max-height: 400px;
  
  margin-bottom: 20px;
`;
const CardImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const CharacterCard = (props) => {
  return(

  <Container>
    <Div >
      <CardImg className="characterimg" alt="character" src={props.image}  />
      <CardTitle>Name: {props.name}</CardTitle>
      <Status>Status: {props.status}</Status>
      <Species>Species: {props.species}</Species>
  </Div>
  </Container>
  )
};


export default CharacterCard;