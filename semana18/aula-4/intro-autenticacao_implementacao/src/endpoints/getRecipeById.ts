import { Request, Response } from "express";
import getAllUserInfo from "../data/getAllUserInfo";
import selectRecipeId from "../data/selectRecipeId";
import { AuthenticationData } from "../services/authenticator";
import { getTokenData } from './../services/authenticator';


export default async function getRecipeById(
   req: Request,
   res: Response
) {
   try {
      const token: string = req.headers.authorization as string
      const tokenData: AuthenticationData = getTokenData(token)
      const result = await selectRecipeId(req.params.id)
           
     
      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      res.status(200).send({
         id: result.id,
         title: result.title,
         description: result.description,
         cratedAt:result.cratedAt
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}