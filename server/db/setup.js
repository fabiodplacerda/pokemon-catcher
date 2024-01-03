const mongoose = require('mongoose');
require('dotenv').config();
// const url = process.env.MONGODB_URI;

const { getPokemonData } = require('../utils/pokemonDataWriter');

const Pokemon = require('../models/pokemonSchema');

async function insertIntoDBdev() {
  mongoose.connect('mongodb://localhost:27017/pokemonCatcher');
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
async function insertIntoDBtest() {
  mongoose.connect('mongodb://localhost:27017/pokemonCatcher_test');
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

async function start() {
  await dropCollection();
  await insertIntoDBdev();
  await insertIntoDBtest();
}

start();
