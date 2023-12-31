import axios from "axios";

const fetchPokemons = () => {
  return axios.get("http://localhost:3000/api/pokemons").then((data) => {
    return data;
  });
};

export default fetchPokemons;
