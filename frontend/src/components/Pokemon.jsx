import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilityDetails, setAbilityDetails] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);

        // Fetch ability details
        const abilityPromises = response.data.abilities.map(async (ability) => {
          const abilityResponse = await axios.get(ability.ability.url);
          return abilityResponse.data;
        });

        const abilityData = await Promise.all(abilityPromises);
        setAbilityDetails(abilityData);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    }
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <section id='pokemonimage'>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </section>
      <section>
        <section id='types'>
          <h2>Type(s)</h2>
          {pokemon.types.map(typeInfo => (
            <button className={`${typeInfo.type.name.toLowerCase()}`}>
            <Link to={`/type/${typeInfo.type.name}`} key={typeInfo.type.name}>
            <img src={`/src/assets/img/${typeInfo.type.name}.png`} alt={typeInfo.type.name} />
              <a>{typeInfo.type.name}</a>
            </Link>
            </button>
          ))}
        </section>
        <section id='stats'>
          <h2>Stats</h2>
          {pokemon.stats.map(stat => (
            <section key={stat.stat.name}>
              <p id='statname'>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2>Abilities</h2>
        {abilityDetails.map(abilityInfo => (
          <section key={abilityInfo.name}>
            <p>{abilityInfo.name}: {abilityInfo.effect_entries[0].effect}</p>
          </section>
        ))}
      </section>
    </>
  );
}

export default Pokemon;
