import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {





  const CharactersDiv = styled.div`
    font-family: "Poppins", sans-serif;
    padding: 1rem;
    width:80;
    min-with:80rem;
    background-image = url(${props.char.image});
  `;
  const NameH2 = styled.h2`
    font-family: "Merienda", sans-serif;
    color: #52331a;
  `;
  const DescriptionP = styled.p`
    font-family: "Merienda", sans-serif;
    color: #5c3412;
     
  `;
  const {currentPage} = props
console.log({currentPage})
  return (
    <CharactersDiv key={props.char.id}>
      <NameH2>{props.char.name}</NameH2>
      <DescriptionP>
        <strong>Status: </strong>
        {props.char.status}
      </DescriptionP>
      <DescriptionP>
        <strong>Species: </strong>
        {props.char.species}
      </DescriptionP>
      <DescriptionP>
        <strong>Gender: </strong>
        {props.char.gender}
      </DescriptionP>
      <DescriptionP>
        <strong>Origin: </strong>
        {props.char.origin.name}
      </DescriptionP>
      <DescriptionP>
        <strong>Location: </strong>
        {props.char.location.name}
      </DescriptionP>
    </CharactersDiv>
     

  );
}
