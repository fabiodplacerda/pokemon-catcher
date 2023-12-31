const rarityClassifier = (pokemon) => {
  const mythicalArr = ["mew", "celebi", "jirachi", "deoxys-normal"];

  const legendaryArr = [
    "articuno",
    "zapdos",
    "moltres",
    "mewtwo",
    "raikou",
    "entei",
    "suicune",
    "lugia",
    "ho-oh",
    "regirock",
    "regice",
    "registeel",
    "latias",
    "latios",
    "kyogre",
    "groudon",
    "rayquaza",
  ];
  if (mythicalArr.includes(pokemon.name)) {
    return "mythic";
  } else if (legendaryArr.includes(pokemon.name)) {
    return "legendary";
  } else if (pokemon.statTotal >= 420) {
    return "epic";
  } else if (pokemon.statTotal >= 380) {
    return "rare";
  } else if (pokemon.statTotal >= 315) {
    return "uncommon";
  } else {
    return "common";
  }
};

module.exports = rarityClassifier;
