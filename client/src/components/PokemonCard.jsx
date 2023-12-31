const PokemonCard = ({ pokemons }) => {
  return (
    <ul className="pokemon-list">
      {pokemons.map(
        ({ order, name, pokemon_img, types, statTotal, rarity }) => {
          return (
            <li key={order} className={`${rarity} pokemon-card`}>
              <h2>{name}</h2>
              <img src={pokemon_img} alt="" className="pokemon-img" />
              <div className="types">
                {types.map((type) => {
                  return (
                    <p key={type} className={`${type} type-text`}>
                      {type}
                    </p>
                  );
                })}
              </div>

              <p> Power: {statTotal} </p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default PokemonCard;
