const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/pokemons", () => {
  it("should return all pokemons", () => {
    return request(app)
      .get("/api/pokemons")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(10);
        body.forEach((pokemon) => {
          expect(pokemon).toMatchObject({
            order: expect.any(Number),
            name: expect.any(String),
            pokemon_img: expect.any(String),
            types: expect.any(Array),
            hp: expect.any(Number),
            attack: expect.any(Number),
            defense: expect.any(Number),
            statTotal: expect.any(Number),
            rarity: expect.any(String),
            generation: expect.any(Number),
          });
        });
      });
  });
});
