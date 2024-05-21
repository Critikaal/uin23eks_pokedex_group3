import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

async function getAllPokemons() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
  return response.data.results;
}

async function getPokemonDetails(pokemonUrl) {
  const response = await axios.get(pokemonUrl);
  const { id, name, sprites } = response.data;
  return { id, name, sprite: sprites.front_default };
}

function SearchResults() {
  const { query } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      const allPokemons = await getAllPokemons();
      setPokemons(allPokemons);
      setLoading(false);
    }
    fetchPokemons();
  }, []);

  useEffect(() => {
    async function filterPokemons() {
      if (query) {
        setLoading(true);
        const filteredResults = pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
        const detailedPokemons = await Promise.all(filteredResults.map(pokemon => getPokemonDetails(pokemon.url)));
        setFilteredPokemons(detailedPokemons);
        setLoading(false);
      } else {
        setFilteredPokemons([]);
      }
    }

    filterPokemons();
  }, [query, pokemons]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='pokemon-list'>
      {filteredPokemons.length ? (
        filteredPokemons.map(pokemon => (
          <article key={pokemon.id}>
            <p>#{pokemon.id.toString().padStart(4, '0')}</p>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h2>
            <Link to={`/pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </h2>
          </article>
        ))
      ) : (
        <p>Det du søker etter finnes ikke.</p>
      )}
    </section>
  );
}

export default SearchResults;
