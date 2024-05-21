import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonsByType } from '../assets/api';

function Type() {
  const { type } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const data = await getPokemonsByType(type);
      console.log(data);
      setPokemons(data);
    }
    fetchPokemons();
  }, [type]);

  return (
    <>
      <img src={`/src/assets/img/${type.toLocaleLowerCase()}.png`} alt={type} />
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      {pokemons.map((pokemon) => (
        <section key={pokemon.name}>
          <p>{pokemon.name}</p>
        </section>
      ))}
    </>
  );
}

export default Type;
