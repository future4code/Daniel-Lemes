import { Request, Response } from "express";
import getAllUserInfo from "../data/getAllUserInfo";
import { AuthenticationData, getTokenData } from "../services/authenticator";
export default async function getUserInfo(
   req: Request,
   res: Response
) {
   try {
    const token: string = req.headers.authorization as string
    const tokenData: AuthenticationData = getTokenData(token)
      const user = await getAllUserInfo(tokenData.id)
      if (!user) {
         throw new Error("Usuário não encontrado")
      }
      res.status(200).send({
         id: user.id,
         name: user.name,
         email: user.email,
         role: user.role
      })
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}