import {connection} from "../index"

export async function createListUserTable():Promise<void>{
   try {
      await connection.raw(`
      CREATE TABLE Users (
         id INT PRIMARY KEY AUTO_INCREMENT,
         name VARCHAR(255) NOT NULL, 
         nickname VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL
         );
      `)
      

      console.log("Sucesso!")
   } catch (error) {
      console.log(error)
   }
}

createListUserTable()