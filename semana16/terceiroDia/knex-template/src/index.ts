import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import { getAllPokemons } from './getAllPokemons';
import { createPokemon } from './createPokemons';

const app: Express = express();

app.use(express.json());
app.use(cors())

export const pokemons: Pokemon[] = []

app.get("/pokemon/all", getAllPokemons);

app.post("/pokemon/new", createPokemon);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
