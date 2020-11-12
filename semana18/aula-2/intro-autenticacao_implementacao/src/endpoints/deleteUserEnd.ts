import { Request, Response } from "express"
import { deleteUser } from "../data/deleteUser"
import  getUserById  from "../data/getUserByIdData"
import { AuthenticationData, getTokenData } from "../services/authenticator";


export const deleteUserEnd = async (req: Request, res: Response) => {
    try {
    const token: string = req.headers.authorization as string
    const tokenData: AuthenticationData = getTokenData(token)
    if(tokenData.role !== "ADMIN"){
       res.statusCode = 401
       throw new Error ( "não autorizado")
    }
      const id = req.params.id;
      await deleteUser(id);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };