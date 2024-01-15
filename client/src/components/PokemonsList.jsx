import { useEffect, useState } from 'react';
import { fetchPokemons } from '../utils/utils';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetchPokemons().then(({ data }) => {
      setPokemons(data);
    });
  }, []);

  return (
    <>
      <h2>Pokemon List</h2>
      <PokemonCard pokemons={pokemons} />
    </>
  );
};

export default PokemonList;
