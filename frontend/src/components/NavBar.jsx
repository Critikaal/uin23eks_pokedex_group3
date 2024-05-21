import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchresults/${search}`);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav>
      <section>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="pokeball" />
        <a href="/">UIN POKÉDEX</a>
        <a href="/teams">TEAMS</a>
      </section>
      <section>
        <form onSubmit={handleSubmit} className='search'>
          <input type="text" placeholder="Search for a Pokémon..." value={search} onChange={handleChange} />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
      </section>
    </nav>
  );
}

export default NavBar;
