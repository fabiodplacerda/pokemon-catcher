import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonById } from '../utils/utils';
import PokemonTypes from './PokemonTypes';

const PokemonSingleCard = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchPokemonById(id).then(({ data }) => {
      setPokemon(data);
    });
  }, [id]);
  return (
    <div className={`single-card ${pokemon.rarity}`}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.pokemon_img} alt={pokemon.name} />
      {pokemon.types ? <PokemonTypes pokemon={pokemon} /> : null}
      <div className="stats">
        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
      </div>

      <p>Total Power: {pokemon.statTotal} </p>
      <p>Generation: {pokemon.generation}</p>
    </div>
  );
};

export default PokemonSingleCard;
