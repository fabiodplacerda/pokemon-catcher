const Pokemon = require("../models/pokemonSchema");

const getPokemons = async (req, res) => {
  try {
    const allPokemons = await Pokemon.find();
    res.status(200).json(allPokemons);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getPokemons };
