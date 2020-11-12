import {Request, Response} from "express"
import { createNewUserWithQueryBuilder } from "../data/createNewPokemon";
import { getUsers } from "../data/getUsers";
import { UserType } from "../types";

export const createUser = async (req: Request, res: Response): Promise<void> => {
   try {

      const { name,nickname, email } = req.body;

      const TodoListUser: UserType[] = await getUsers()

      const users: UserType | undefined = TodoListUser.find(
         userType => userType.name === name
      )

      if (users) {
         res.statusCode = 409
         throw new Error("Id already exists")
      }


     await createNewUserWithQueryBuilder( name, nickname, email)

      res.status(201).send("New User created!");
   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
}

// try {
//     const { id, name, type } = req.body;
//     const pokemons: Pokemon[] = await getPokemons()
//     const pokemon: Pokemon | undefined = pokemons.find(
//        pokemon => pokemon.id === id
//     )
//     if (pokemon) {
//        res.statusCode = 409
//        throw new Error("Id already exists")
//     }
//     if (!(type in POKE_TYPES)) {
//        res.statusCode = 406
//        throw new Error("Invalid Pokemon types")
//     }
//    await createNewPokemonWithQueryBuilder(id, name, type)
//     res.status(201).send("New Pokemon created!");
//  } catch (error) {
//     console.log(error)
//     res.send(error.message)
//  }
// }