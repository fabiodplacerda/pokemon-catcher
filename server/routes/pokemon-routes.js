const express = require("express");
const { getPokemons } = require("../controllers/pokemon-controller");

const router = express.Router();

router.get("/pokemons", getPokemons);

module.exports = router;
