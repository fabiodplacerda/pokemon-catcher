const rarityClassifier = (pokemon) => {
  if (pokemon.pokemon_id === 150 || pokemon.pokemon_id === 151) {
    return "mythic";
  } else if (
    pokemon.pokemon_id === 144 ||
    pokemon.pokemon_id === 145 ||
    pokemon.pokemon_id === 146
  ) {
    return "legendary";
  } else if (pokemon.statTotal >= 425) {
    return "epic";
  } else if (pokemon.statTotal >= 380) {
    return "rare";
  } else if (pokemon.statTotal >= 315) {
    return "uncommon";
  } else {
    return "common";
  }
};

module.exports = rarityClassifier;
