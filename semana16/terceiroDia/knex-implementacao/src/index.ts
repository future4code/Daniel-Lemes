
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {  avgSalaryByGender } from "./endpoints/actorQueries";

import knex from 'knex'

import dotenv from "dotenv"

dotenv.config()

console.log(process.env.teste)

export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors())


const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
   `)
 
    return result[0][0]
 }



// countActors("male")
// searchActor("Tony ramos")

const updateActor = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id); 
      
 };
 
 updateActor("003",10 )

 const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
     .delete()
     .where("id", id);
 }; 
//  deleteActor("002", )


avgSalaryByGender("male")



const reultt = app.get("/actor", async (req: Request, res: Response) => {
   try {
     
     res.status(200).send("criado com sucesso")
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
   console.log(reultt)
 });


 app.get("/actor/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id;
     const actor = await getActorById(id);

     res.status(200).send(actor)
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
  
 });  





 
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

