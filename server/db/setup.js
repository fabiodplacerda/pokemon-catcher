const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

const { getPokemonData } = require("../utils/pokemonDataWriter");

const Pokemon = require("../models/pokemonSchema");

mongoose.connect(url);

async function insertIntoDB() {
  try {
    const result = await getPokemonData();
    await Pokemon.insertMany(result);
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

async function start() {
  await dropCollection();
  await insertIntoDB();
}

start();
