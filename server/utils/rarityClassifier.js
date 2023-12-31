const rarityClassifier = (pokemon) => {
  if (pokemon.order === 150 || pokemon.order === 151) {
    return "mythic";
  } else if (
    pokemon.order === 144 ||
    pokemon.order === 145 ||
    pokemon.order === 146
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
