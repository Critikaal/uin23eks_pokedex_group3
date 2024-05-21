import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../assets/api';

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const data = await getPokemonById(id);
      setPokemon(data);
    }
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <section>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </section>
      </section>
      <section>
        <section>
          <h2>Type(s)</h2>
          {pokemon.types.map(typeInfo => (
            <button key={typeInfo.type.name}>{typeInfo.type.name}</button>
          ))}
        </section>
        <section>
          <h2>Stats</h2>
          {pokemon.stats.map(stat => (
            <section key={stat.stat.name}>
              <p>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2>Abilities</h2>
        {pokemon.abilities.map(abilityInfo => (
          <section key={abilityInfo.ability.name}>
            <h3>{abilityInfo.ability.name}</h3>
            <p>{abilityInfo.is_hidden ? 'Hidden' : 'Visible'}</p>
          </section>
        ))}
      </section>
    </>
  );
}

export default Pokemon;
