const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  order: Number,
  name: String,
  pokemon_img: String,
  types: [String],
  hp: Number,
  attack: Number,
  defense: Number,
  statTotal: Number,
  rarity: {
    type: String,
    lowercase: true,
  },
});

module.exports = mongoose.model("Pokemons", pokemonSchema);
