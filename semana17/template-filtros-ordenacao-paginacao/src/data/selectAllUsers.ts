import { connection } from "..";
import { User } from "../types/User";



export default async function selectAllUsers():Promise<any> {
    const result:User[] = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }