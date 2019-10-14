import React from "react";

export default function CharacterCard({ character }) {
  console.log('props', character);
  const { id, name, image } = character;
  return (
    <div key={id} className="card">
      <h2>{name}</h2>
      <img src={image} alt={name}/>
    </div> 
  )
}
