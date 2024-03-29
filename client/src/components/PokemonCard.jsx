import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemons }) => {
  return (
    <ul className="pokemon-list">
      {pokemons.map(
        ({ _id, order, name, pokemon_img, types, statTotal, rarity }) => {
          return (
            <Link
              key={order}
              className={`${rarity} pokemon-card`}
              to={`/pokemons/${_id}`}
            >
              <h2>{name}</h2>
              <img
                src={pokemon_img}
                alt={`${name} image`}
                className="pokemon-img"
              />
              <div className="types">
                {types.map(type => {
                  return (
                    <p key={type} className={`${type} type-text`}>
                      {type}
                    </p>
                  );
                })}
              </div>

              <p> Power: {statTotal} </p>
            </Link>
          );
        }
      )}
    </ul>
  );
};

export default PokemonCard;
