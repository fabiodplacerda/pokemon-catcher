const mongoose = require("mongoose");
require("dotenv").config();
const url = "mongodb://localhost/pokemonCatcher";

const { getPokemonData } = require("../utils/pokemonDataWriter");

const Pokemon = require("../models/pokemonSchema");

mongoose.connect(url);

async function insertIntoDB() {
  try {
    const result = await getPokemonData();
    const firstTen = result.slice(0, 10);
    await Pokemon.insertMany(firstTen);
  } catch (e) {
    console.log(e.message);
  } finally {
    await mongoose.connection.close();
  }
}

async function dropCollection() {
  try {
    Pokemon.collection.drop();
  } catch (err) {
    console.log(err);
  }
}

async function startTestEnvironment() {
  await dropCollection();
  await insertIntoDB();
}

startTestEnvironment();
