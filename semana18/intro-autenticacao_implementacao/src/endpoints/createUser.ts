import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.email||
            !req.body.password 
        ) {
          throw new Error('Preencha os campos "email" e "password"')
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
          // Item c. Validação da senha
          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        

        const id: string = generateId()

        await insertUser(
            id,
            req.body.email,
            req.body.password
           
        )

         const token: string = generateToken({id})

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


    // const userData = {
    //   email: req.body.email,
    //   password: req.body.password,
    // };

    // const id = generateId();

  
    // await createUser(id, userData.email, userData.password);

    // const token = generateToken({
    //   id,
    // });

    // res.status(200).send({
    //   token,
    // });
  