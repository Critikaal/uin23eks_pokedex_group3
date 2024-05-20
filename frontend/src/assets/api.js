import axios from 'axios';

const PokeAPI = 'https://pokeapi.co/api/v2';

export const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`${PokeAPI}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return null;
  }
};

export const getPokemonsByType = async (type) => {
  try {
    const response = await axios.get(`${PokeAPI}/type/${type}`);
    return response.data.pokemon.map(p => p.pokemon);
  } catch (error) {
    console.error('Error fetching Pokémon by type:', error);
    return [];
  }
};

export const getAllPokemons = async () => {
    try {
      const response = await axios.get(`${PokeAPI}/pokemon?limit=9`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching all Pokémon:', error);
      return [];
    }
  };
