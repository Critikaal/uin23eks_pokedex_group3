import React from 'react';
import { Link } from 'react-router-dom';

function TypeButtons() {
  const types = [
    'Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric',
    'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy'
  ];

  return (
    <>
    <h1>Types</h1>
    <section id="types">
      {types.map(type => (
        <button key={type} className={`${type.toLowerCase()}`}>
          <Link to={`/type/${type.toLowerCase()}`}>
          <img src={`src/assets/img/${type.toLowerCase()}.png`} alt={type} />
          <a>{type}</a>
          </Link>
        </button>
        
      ))}
    </section>
    </>
  );
}

export default TypeButtons;
