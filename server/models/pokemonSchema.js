const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  order: Number,
  name: String,
  pokemon_img: String,
  types: [String],
  hp: Number,
  attack: Number,
  defense: Number,
  'special-attack': Number,
  'special-defense': Number,
  speed: Number,
  statTotal: Number,
  rarity: {
    type: String,
    lowercase: true,
  },
  generation: Number,
});

const Pokemon = mongoose.model('Pokemons', pokemonSchema);

module.exports = Pokemon;
