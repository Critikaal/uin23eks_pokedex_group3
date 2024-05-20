import React from 'react';
import { Link } from 'react-router-dom';

function TypeButtons() {
  const types = [
    'Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric',
    'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy'
  ];

  return (
    <section id="types">
      {types.map(type => (
        <button key={type}>
          <Link to={`/type/${type.toLowerCase()}`}>
          <img src={`src/assets/img/type/${type.toLowerCase()}.png`} alt={type} />
          </Link>
          <p>{type}</p>
          
        </button>
        
      ))}
    </section>
  );
}

export default TypeButtons;
