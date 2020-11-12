import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipes";
import {generateId} from "../services/idGenerator";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import insertRecipes from "../data/insertRecipes";
export default async function createRecipe(
   req: Request,
   res: Response
) {
   try {
      const token: string = req.headers.authorization as string
      const tokenData: AuthenticationData = getTokenData(token)
      if (
         !req.body.title ||
         !req.body.description
      ) {
         throw new Error('"title", "description" são obrigatórios')
      }
      const id: string = generateId()
      const userid: string = tokenData.id
      await insertRecipes(
         id,
         req.body.title,
         req.body.description,
         userid
      )
      res.status(200).send({
         message: "Tarefa criada com sucesso!",
         id
      })
   } catch (error) {
      let message = error.sqlMessage || error.message
      if (message.includes("date")) {
         message = "'deadline' deve ser uma data válida, no formato aaaa-mm-dd"
      }
      res.status(400).send({ message })
   }
}