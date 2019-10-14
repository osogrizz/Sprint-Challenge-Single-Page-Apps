import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
  text-align: center;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
  
`

export default function CharacterCard({ character }) {
  console.log('props', character);
  const { id, name, image } = character;
  return (
    <Container key={id} className="card">
      <h2>{name}</h2>
      <img src={image} alt={name}/>
    </Container> 
  )
}
