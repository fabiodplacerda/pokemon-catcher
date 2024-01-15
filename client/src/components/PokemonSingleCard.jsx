import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonById } from '../utils/utils';
import PokemonTypes from './PokemonTypes';

const PokemonSingleCard = () => {
  const [pokemon, setPokemon] = useState({});

  const barWidth = number => {
    if (number > 100) {
      return {
        width: '100%',
      };
    }
    return {
      width: `${number}%`,
    };
  };

  const { id } = useParams();
  useEffect(() => {
    fetchPokemonById(id).then(({ data }) => {
      setPokemon(data);
    });
  }, [id]);

  return (
    <div className={`single-card ${pokemon.rarity}`}>
      <h2>{pokemon.name}</h2>
      {pokemon.types ? <PokemonTypes pokemon={pokemon} /> : null}
      <div className="single-card-container">
        <img src={pokemon.pokemon_img} alt={pokemon.name} />

        <div className="stats">
          <div className="stat-container">
            <p className="stat-text">HP</p>
            <div id="hp-bar">
              <div id="hp-percent" style={barWidth(pokemon.hp)}>
                {pokemon.hp}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">Attack</p>
            <div id="attack-bar">
              <div id="attack-percent" style={barWidth(pokemon.attack)}>
                {pokemon.attack}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">Defense</p>
            <div id="defense-bar">
              <div id="defense-percent" style={barWidth(pokemon.defense)}>
                {pokemon.defense}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">Sp. Attack</p>
            <div id="sp-attack-bar">
              <div
                id="sp-attack-percent"
                style={barWidth(pokemon['special-attack'])}
              >
                {pokemon['special-attack']}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">Sp. Defense</p>
            <div id="sp-defense-bar">
              <div
                id="sp-defense-percent"
                style={barWidth(pokemon['special-defense'])}
              >
                {pokemon['special-defense']}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">speed</p>
            <div id="speed-bar">
              <div id="speed-percent" style={barWidth(pokemon.speed)}>
                {pokemon.speed}
              </div>
            </div>
          </div>

          <div className="stat-container">
            <p className="stat-text">statTotal</p>
            <div id="total-power-bar">
              <div id="total-power-percent" style={barWidth(pokemon.statTotal)}>
                {pokemon.statTotal}
              </div>
            </div>
          </div>

          {/* <p> {pokemon.attack}: Attack</p>
          <p>Defense: {pokemon.defense}</p>
          <p>Special Attack: {pokemon['special-attack']}</p>
          <p>Special Defense: {pokemon['special-defense']}</p>
          <p>Speed: {pokemon.speed}</p>
          <p>Total Power: {pokemon.statTotal} </p> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonSingleCard;
