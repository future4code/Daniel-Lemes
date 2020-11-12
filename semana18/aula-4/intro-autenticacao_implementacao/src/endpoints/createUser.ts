import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import {generateId} from "../services/idGenerator";
import { hash } from "../services/hasManager"
import insertRecipes from "../data/insertRecipes";
export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (!req.body.name||
            !req.body.email||
            !req.body.password ||
            !req.body.role 
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

        const cypherPassword = await hash(req.body.password)

        await insertUser(
            id,
            req.body.name,
            req.body.email,
           cypherPassword,
           req.body.role
           
        )

        // await insertRecipes(
        //     id,
        //     req.body.title,
        //     req.body.description,
        //     req.body.cratedAt
        // )
       
        

         const token: string = generateToken({
             id,
            role:req.body.role 
            })
        
        

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

