const mongoose = require("mongoose");
const url = "mongodb://localhost/pokemonCatcher";
const { getPokemonData } = require("./src/utils/pokemonDataWriter");

const Pokemons = require("./src/models/pokemonSchema");

mongoose.connect(url);

async function insertIntoDB() {
  try {
    const result = await getPokemonData();
    const pokemon = await Pokemons.insertMany(result);
  } catch (e) {
    console.log(e.message);
  } finally {
    await mongoose.connection.close();
  }
}

async function dropCollection() {
  try {
    Pokemons.collection.drop();
  } catch (err) {
    console.log(err);
  }
}

async function start() {
  await dropCollection();
  await insertIntoDB();
}

start();
