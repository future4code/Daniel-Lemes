import {Request, Response} from "express"
import {pokemons} from "./index"
import {Pokemon, POKE_TYPES} from "./types"

export const createPokemon = async (req: Request, res: Response) => {
    try {
 
       const { id, name, type } = req.body;
 
       const pokemon: Pokemon | undefined = pokemons.find(
          pokemon => pokemon.id === id
       )
 
       if (pokemon) {
          res.statusCode = 409
          throw new Error("Id already exists")
       }
 
       if (!(type in POKE_TYPES)) {
          res.statusCode = 406
          throw new Error("Invalid Pokemon types")
       }
 
 
       pokemons.push({ id, name, type })
 
       res.status(201).send("New Pokemon created!");
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }