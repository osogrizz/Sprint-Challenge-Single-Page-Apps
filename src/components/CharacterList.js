import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {
        console.log(response.data)
        setList(response.data.results)
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      {list.map( character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name}/>
        </div>
      ))}
      <h2></h2>
    </section>
  );
}
