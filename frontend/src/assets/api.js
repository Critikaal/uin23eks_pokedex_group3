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



export const getPokemons = async () => {
    try {
      const response = await axios.get(`${PokeAPI}/pokemon?limit=9`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching all Pokémon:', error);
      return [];
    }
  };

  export const getAllPokemons = async () => {
    try {
      const response = await axios.get(`${PokeAPI}/pokemon?limit=1025`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching all Pokémon:', error);
      return [];
    }
  };

  
