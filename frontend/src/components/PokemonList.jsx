// src/components/PokemonList.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonById, getAllPokemons } from '../assets/api';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const allPokemons = await getAllPokemons();
      const pokemonDetailsPromises = allPokemons.map(pokemon => getPokemonById(pokemon.name));
      const detailedPokemons = await Promise.all(pokemonDetailsPromises);
      setPokemons(detailedPokemons);
    }
    fetchPokemons();
  }, []);

  if (pokemons.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {pokemons.map(pokemon => (
        <section key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>#{pokemon.id.toString().padStart(4, '0')}</p>
          <h2>
            <Link to={`/pokemon/${pokemon.id}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
            
          </h2>
          {pokemon.types.map(typeInfo => (
            <p key={typeInfo.type.name}>{typeInfo.type.name}</p>
          ))}
        </section>
      ))}
    </>
  );
}

export default PokemonList;