// src/components/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPokemons } from '../assets/api';

function SearchResults({ query }) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const allPokemons = await getAllPokemons();
      console.log(allPokemons)
      setPokemons(allPokemons);
    }
    fetchPokemons();
  }, []);

  

  useEffect(() => {
    if (query) {
      const results = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemons(results);
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [query, pokemons]);

  if (!pokemons.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {filteredPokemons.length ? (
        filteredPokemons.map(pokemon => (
          <section key={pokemon.name}>
            <p>{pokemon.name}</p>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </section>
        ))
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </>
  );
}

export default SearchResults;
