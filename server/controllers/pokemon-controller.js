const Pokemon = require('../models/pokemonSchema');

const getPokemons = async (req, res) => {
  try {
    const allPokemons = await Pokemon.find();
    res.status(200).json(allPokemons);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPokemonById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonById = await Pokemon.findById(id);
    res.status(200).json(pokemonById);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getPokemons, getPokemonById };
