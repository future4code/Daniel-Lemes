import {connection} from "../index"
import { Pokemon } from "../types";

export async function getPokemons():Promise<Pokemon[]> {
   try {
      const result = await connection.raw("SELECT * FROM pokemons")

      console.log(result[0])

      return result[0]
   } catch (error) {
      console.log(error)
      return []
   }
}