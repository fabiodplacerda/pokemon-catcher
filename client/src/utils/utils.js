import axios from 'axios';

const fetchPokemons = () => {
  return axios.get('http://localhost:3000/api/pokemons').then(data => {
    return data;
  });
};

const fetchPokemonById = id => {
  return axios.get(`http://localhost:3000/api/pokemons/${id}`).then(data => {
    return data;
  });
};

export { fetchPokemons, fetchPokemonById };
