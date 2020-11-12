import { connection } from "../index";

export default async function insertRecipes(
    id: string,
    title: string,
   description: string,
   user_id:string

 

) {
    await connection.insert({
        id ,
       title,
       description,
       user_id
    
     
    
    }).into('Recipes')
}

