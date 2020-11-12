import { Request, Response } from "express"
import {getUsers } from "../data/getUsers"
import { UserType } from "../types"

export const getAllUser = async (req: Request, res: Response) => {
   try {

      const userAll: UserType[] = await getUsers()

      if (!userAll.length) {
         res.statusCode = 404
         throw new Error("No pokemons found")
      }

      res.status(200).send(getAllUser)

   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
}