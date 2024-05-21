// src/components/NavBar.jsx
import React from 'react';

function NavBar({ query, setQuery }) {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <nav>
      <section>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" />
        <a href="/">Pokédex</a>
      </section>
      <section>
        <a href="/teams">Teams</a>
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={query}
          onChange={handleSearch}
        />
      </section>
    </nav>
  );
}

export default NavBar;
