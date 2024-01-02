const express = require("express");

const cors = require("cors");

const PokemonRoutes = require("./routes/pokemon-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", PokemonRoutes);

module.exports = app;
