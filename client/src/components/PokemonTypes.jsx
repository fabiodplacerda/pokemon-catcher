const PokemonTypes = ({ pokemon }) => {
  return (
    <div className="types">
      {pokemon.types.map(type => {
        return (
          <p key={type} className={`${type} type-text`}>
            {type}
          </p>
        );
      })}
    </div>
  );
};

export default PokemonTypes;
