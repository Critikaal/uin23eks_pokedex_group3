import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

async function getPokemonsByType(type) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  return response.data.pokemon.map(p => p.pokemon);
}

function Type() {
  const { type } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails(pokemon) {
      const response = await axios.get(pokemon.url);
      const { id, name, sprites } = response.data;
      return { id, name, sprite: sprites.front_default };
    }

    async function fetchPokemons() {
      setLoading(true);
      try {
        const basicPokemonData = await getPokemonsByType(type);
        const detailedPokemonData = await Promise.all(basicPokemonData.map(fetchPokemonDetails));
        setPokemons(detailedPokemonData);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    fetchPokemons();
  }, [type]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <section id='typestitle'>
      <img src={`/src/assets/img/${type.toLowerCase()}.png`} alt={type} />
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
    </section>
    
    <section className='pokemon-list'>
      {pokemons.map((pokemon) => (
        <article key={pokemon.id}>
          <p>#{pokemon.id.toString().padStart(4, '0')}</p>
          <img src={pokemon.sprite} alt={pokemon.name} />
          <h2>
            <Link to={`/pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </h2>
        </article>
      ))}
    </section>
    </>
  );
}

export default Type;
