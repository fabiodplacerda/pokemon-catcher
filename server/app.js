const express = require("express");
const mongoose = require("mongoose");

const Pokemon = require("./models/pokemonSchema");

const app = express();

app.use(express.json());

app.get("/api", async (req, res) => {
  return res.json({ message: "Hello World" });
});
app.get("/api/pokemons", async (req, res) => {
  const allPokemons = await Pokemon.find();
  return res.status(200).json(allPokemons);
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost/pokemonCatcher");
    app.listen(3000, () => {
      console.log("App Listening in port 3000");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
