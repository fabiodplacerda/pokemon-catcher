const setGeneration = (pokemon) => {
  if (pokemon.order <= 151) {
    return 1;
  } else if (pokemon.order <= 251) {
    return 2;
  } else {
    return 3;
  }
};

module.exports = setGeneration;
