import { Request, Response } from "express";
import getAllUserInfo from "../data/getAllUserInfo";
import getUserByIdData from "../data/getUserByIdData"
import { USER_ROLES } from "../data/insertUser";
import { AuthenticationData } from "../services/authenticator";
import { getTokenData } from './../services/authenticator';

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const token: string = req.headers.authorization as string
        const user = await getAllUserInfo(req.params.id)
        if (!user) {
           throw new Error("Usuário não encontrado")
        }
      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      if (!user) {
         throw new Error("Usuário não encontrado")
      }
  
      res.status(200).send({
         id: user.id,
         name:user.name,
         email: user.email,
         role:user.role
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}

