const axios = require("axios");
const rarityClassifier = require("./rarityClassifier");
const setGeneration = require("./setGeneration");

exports.getPokemonData = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=386"
    );
    const pokemonObject = [];

    await Promise.all(
      data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        pokemonObject.push({
          order: data.id,
          name: data.name,
          pokemon_img: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((type) => {
            return type.type.name;
          }),
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          statTotal:
            data.stats[0].base_stat +
            data.stats[1].base_stat +
            data.stats[2].base_stat +
            data.stats[4].base_stat +
            data.stats[5].base_stat,
        });
      })
    );

    pokemonObject.sort((a, b) => a.order - b.order);

    for (const pokemon of pokemonObject) {
      pokemon.rarity = rarityClassifier(pokemon);
      pokemon.generation = setGeneration(pokemon);
    }
    console.log("Successfully fetched Pokémon data.");
    return pokemonObject;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error.message);
    throw error;
  }
};
