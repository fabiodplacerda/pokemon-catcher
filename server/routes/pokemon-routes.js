const express = require('express');
const {
  getPokemons,
  getPokemonById,
} = require('../controllers/pokemon-controller');

const router = express.Router();

router.get('/pokemons', getPokemons);

router.get('/pokemons/:id', getPokemonById);

module.exports = router;
