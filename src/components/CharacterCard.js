import React from "react";

export default function CharacterCard(props) {
  return (
    <div key={props.char.id} >
          <h2>{props.char.name}</h2>
          <p>Status: {props.char.status}</p>
          <p>Species: {props.char.species}</p>
          <p>Gender: {props.char.gender}</p>
          <p>Origin: {props.char.origin.name}</p>
          <p>Location: {props.char.location.name}</p>
    </div>
  );
}
